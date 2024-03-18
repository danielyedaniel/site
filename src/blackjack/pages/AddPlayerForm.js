import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import CustomTextField from '../../generics/TextField';

function AddPlayerForm({ onAddPlayer, errorMessage }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(errorMessage);

  useEffect(() => {
    setError(errorMessage);
  }, [errorMessage]);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() && password.trim()) {
      try {
        await onAddPlayer(name, password);
        setName('');
        setPassword('');
        setError('');
      } catch (error) {
        setError(error.message);
      }
    } else {
      setError('Please provide a username and password.');
    }
  };  

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      sx={{ '& > :not(style)': { m: 1 } }}
    >
      <CustomTextField
        id="playerName"
        label="Player's Name"
        name="name"
        autoComplete="name"
        autoFocus={true}
        type="text"
        placeholder="Enter player's name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <CustomTextField
        id="playerPassword"
        label="Password"
        name="password"
        autoComplete="new-password"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Player
      </Button>
    </Box>
  );
}

export default AddPlayerForm;
