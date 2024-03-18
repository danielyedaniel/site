// CustomTextField.js
import React from 'react';
import { TextField } from '@mui/material';

const CustomTextField = ({ id, label, name, autoComplete, autoFocus, type, value, onChange, placeholder }) => {
  return (
    <TextField
      variant="outlined" // Ensure the variant is set to outlined
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      fullWidth // Ensure it takes the full width
      label={label}
      id={id}
      name={name}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      type={type}
      InputLabelProps={{
        sx: { color: 'white' }, // Style for the label color
      }}
      InputProps={{
        sx: { color: 'white', '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }, // Style for the input text and border color
      }}
    />
  );
};

export default CustomTextField;
