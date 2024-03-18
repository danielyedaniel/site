require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./db/db');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Up & Running!');
});

app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        const query = 'INSERT INTO Users (username, password) VALUES (?, ?)';
        db.query(query, [username, password], (error, results) => {
            if (error) {
                return res.status(500).send(error.message);
            }
            res.status(201).send('User created successfully');
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM Users WHERE username = ?';

    db.query(query, [username], async (error, results) => {
        if (error) {
            return res.status(500).send(error.message);
        }
        if (results.length > 0) {
            if (password == results[0].password) {
                res.status(200).send('User authenticated successfully');
            } else {
                res.status(401).send('Authentication failed');
            }
        } else {
            res.status(404).send('User not found');
        }
    });
});

app.post('/balance-transfer', (req, res) => {
    try {
        const { to, from, amount } = req.body;
        
        if (!to || !from || !amount || isNaN(amount)) {
            return res.status(400).send('Invalid parameters');
        }

        const deductQuery = 'UPDATE Balances SET balance = balance - ? WHERE username = ?';
        db.query(deductQuery, [amount, from], (deductError, deductResults) => {
            if (deductError) {
                return res.status(500).send(deductError.message);
            }
            const addQuery = 'UPDATE Balances SET balance = balance + ? WHERE username = ?';
            db.query(addQuery, [amount, to], (addError, addResults) => {
                if (addError) {
                    db.query(deductQuery, [amount, from], (rollbackError, rollbackResults) => {
                        if (rollbackError) {
                            console.error('Rollback error:', rollbackError.message);
                        }
                        return res.status(500).send(addError.message);
                    });
                }
                res.status(200).send('Balance transfer successful');
            });
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post('/add-balance', (req, res) => {
    try {
        const { username } = req.body;

        if (!username) {
            return res.status(400).send('Username is required');
        }

        const query = 'INSERT INTO Balances (username, balance) VALUES (?, 0)';
        db.query(query, [username], (error, results) => {
            if (error) {
                return res.status(500).send(error.message);
            }
            res.status(201).send('User added with balance 0');
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/balances', (req, res) => {
    try {
      const query = 'SELECT username, balance FROM Balances';
      db.query(query, (error, results) => {
        if (error) {
          return res.status(500).send(error.message);
        }
        res.status(200).json(results);
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  });  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});