import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import CustomSelect from '../../generics/SelectField';
import CustomTextField from '../../generics/TextField';

function AddDebtForm({ players, onAddDebt, user }) {
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState(0);
  const [errorTo, setErrorTo] = useState(''); 
  const [errorAmount, setErrorAmount] = useState(''); 

  const validateForm = () => {
    let isValid = true;
    setErrorTo('');
    setErrorAmount(0);

    if (!user) {
      setErrorTo('No user specified');
      isValid = false;
    }

    if (!to) {
      setErrorTo('Please select a player.');
      isValid = false;
    }

    if (!amount) {
      setErrorAmount('Please enter an amount.');
      isValid = false;
    } else if (isNaN(amount) || parseFloat(amount) <= 0) {
      setErrorAmount('Please enter a valid amount greater than 0.');
      isValid = false;
    }

    if (to === user) {
      setErrorTo("You can't add debt to yourself.");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onAddDebt(user, to, parseFloat(amount));
      setTo('');
      setAmount(0);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <CustomSelect
        id="to-label"
        label="Who to"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        options={players.filter(player => player.username !== user).map(player => ({
          label: player.username,
          value: player.username
        }))}
        error={Boolean(errorTo)}
        helperText={errorTo}
      />

      <CustomTextField
        id="amount"
        label="Amount"
        name="amount"
        autoComplete="amount"
        autoFocus={true}
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        error={Boolean(errorAmount)}
        helperText={errorAmount}
      />

      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} disabled={!user || !to || !amount}>
        Add Debt
      </Button>
    </Box>
  );
}

export default AddDebtForm;
