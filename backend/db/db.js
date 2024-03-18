const mysql = require('mysql');
require('dotenv').config();

const dbConnection  = mysql.createConnection({
    host     : process.env.DB_HOST || 'localhost',
    user     : process.env.DB_USER || 'yedanlra_admin',
    password : process.env.DB_PASSWORD || 'TrAplcg12', 
    database : process.env.DB_NAME || 'yedanlra_bj'
});

dbConnection.connect(error => {
    if (error) {
        console.error('Error connecting to the database: ', error);
        return;
    }
    console.log('Successfully connected to the database.');
});

module.exports = dbConnection;