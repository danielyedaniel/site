import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import CustomTextField from '../../generics/TextField';
import SelectField from '../../generics/SelectField';

function LoginForm({ onSubmit, usernames = [], errorMessage }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password });
    setUsername('');
    setPassword('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      sx={{ '& > :not(style)': { m: 1 } }}
    >
      <SelectField
        id="username-select"
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        options={usernames.map(user => ({ value: user, label: user }))}
      />

      <CustomTextField
        id="password"
        label="Password"
        name="password"
        autoComplete="current-password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {errorMessage && (
        <Typography color="error" textAlign="center">
          {errorMessage}
        </Typography>
      )}

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </Box>
  );
}

export default LoginForm;
