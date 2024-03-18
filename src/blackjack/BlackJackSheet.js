import React, { useState,  useEffect } from 'react';
import { Container, Typography, Box, Tab, Tabs, Grid, Paper, Button } from '@mui/material';
import AddPlayerForm from './pages/AddPlayerForm';
import AddDebtForm from './pages/AddDebtForm';
import BalanceSheet from './pages/BalanceSheet';
import LoginForm from './pages/LoginForm';
import { loadPlayers, savePlayers, clearPlayersCache } from './cache/cacheUtils';

const BlackJackSheet = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(true); // Show login form by default
  const [players, setPlayers] = useState(loadPlayers());
  const [balances, setBalances] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    savePlayers(players);
  }, [players]);

  const handleLoginSuccess = (username) => {
    setLoggedIn(true);
    setCurrentUser(username);
    setShowLoginForm(false);
  };

  const handleAddPlayerSuccess = (username) => {
    setLoggedIn(true);
    setCurrentUser(username);
    setShowLoginForm(false); 
  };

  const renderLoginForm = (players, errorMessage) => (
    <LoginForm
      onSubmit={(userData) => {
        login(userData.username, userData.password);
      }}
      onSwitchToRegister={() => setShowLoginForm(false)}
      usernames={players.map(player => player.username)}
      errorMessage={errorMessage}
    />
  );

  const renderAddPlayerForm = (errorMessage) => (
    <AddPlayerForm
      onAddPlayer={(username, password) => {
        addPlayer(username, password);
      }}
      onSwitchToLogin={() => setShowLoginForm(true)}
      errorMessage={errorMessage}
    />
  );

  const updateBalanceSheet = async () => {
    try {
      await getBalances();
    } catch (error) {
      console.error('Error updating balance sheet:', error.message);
    }
  };

  const addPlayer = async (username, password) => {
    try {
      const requestBody = {
        username: username,
        password: password
      };
  
      const response = await fetch('https://api.yedaniel.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.text();
        setErrorMessage(`Failed to add player: ${response.status} ${errorData}`);
      }

      const balanceRes = await fetch('https://api.yedaniel.com/add-balance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!balanceRes.ok) {
        const errorData = await response.text();
        setErrorMessage(`Failed to add player balance: ${response.status} ${errorData}`);
      }

      setErrorMessage('');
      updateBalanceSheet();
      handleAddPlayerSuccess(username);

      setPlayers(prevPlayers => [...prevPlayers, { username }]);
      console.log('Player added successfully');
    } catch (error) {
      setErrorMessage(`Error adding player`);
    }
  };  

  const login = async (username, password) => {
    try {
      const requestBody = { username, password };
      const response = await fetch('https://api.yedaniel.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });
  
      if (!response.ok) {
        const errorData = await response.text();
        setErrorMessage("Login failed: " + (response.status === 401 ? "Incorrect username or password." : errorData));
        return;
      }
      setErrorMessage(''); 
      handleLoginSuccess(username);
      console.log('Login successful');
    } catch (error) {
      console.error('Error during login:', error.message);
      setErrorMessage("Login error: " + error.message);
    }
  };
  
  const transferBalance = async (from, to, amount) => {
    try {
      const numericAmount = parseFloat(amount);
      if (isNaN(numericAmount)) {
        throw new Error(`${from}, ${to}, ${amount}`);
      }
  
      amount = parseFloat(numericAmount.toFixed(2));
  
      const requestBody = {
        from,
        to,
        amount
      };
      
      const response = await fetch('https://api.yedaniel.com/balance-transfer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
  
      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Failed to transfer balance: ${response.status} ${errorData}`);
      }
  
      updateBalanceSheet();
  
      console.log('Balance transferred successfully');
    } catch (error) {
      console.error('Error transferring balance:', error.message);
      throw error;
    }
  };
  

  const getBalances = async () => {
    try {
      const response = await fetch('https://api.yedaniel.com/balances', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Failed to retrieve balances: ${response.status} ${errorData}`);
      }
  
      const balances = await response.json();
      setBalances(balances);
      console.log('Balances retrieved successfully');
    } catch (error) {
      console.error('Error retrieving balances:', error.message);
      throw error;
    }
  }; 
  
  
  return (
    <Container maxWidth="md" sx={{ mt: 4, bgcolor: 'transparent', color: 'white' }}>
      <Paper elevation={3} sx={{ p: 6, borderRadius: 2, bgcolor: '#1a1a1a' }}>
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ color: '#ffffff' }}>
          Balance Sheet
        </Typography>

        {loggedIn ? (
          <>
            <Box sx={{ my: 3 }}>
              <AddDebtForm players={players} onAddDebt={transferBalance} user={currentUser}/>
            </Box>
            <Grid container justifyContent="center">
              <BalanceSheet balances={balances} />
            </Grid>
          </>
        ) : (
          <Box sx={{ my: 3 }}>
            {showLoginForm ? renderLoginForm(players, errorMessage) : renderAddPlayerForm(errorMessage)}
            <Button onClick={() => setShowLoginForm(!showLoginForm)} fullWidth>
              {showLoginForm ? "Add New Player" : "Login"}
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );

};

export default BlackJackSheet;
