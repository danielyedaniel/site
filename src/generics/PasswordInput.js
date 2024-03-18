// CustomPasswordInput.js
import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const CustomPasswordInput = ({ id, label, name, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      variant="outlined"
      type={showPassword ? 'text' : 'password'}
      label={label}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      fullWidth
      InputLabelProps={{
        sx: { color: 'white' },
      }}
      InputProps={{
        sx: { color: 'white', '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' } },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={togglePasswordVisibility}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default CustomPasswordInput;
