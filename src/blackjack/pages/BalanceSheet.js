import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { grey } from '@mui/material/colors';

function BalanceSheet({ balances }) {
  return (
    <TableContainer 
      component={Paper} 
      sx={{ bgcolor: grey[900], color: 'white' }} // Dark grey background with white text
    >
      <Table aria-label="balance sheet" sx={{
        '.MuiTableCell-root': {
          borderColor: grey[800],
          color: 'white',
        }
      }}>
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell align="right">Balance ($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {balances.sort((a, b) => b.balance - a.balance).map((balance) => (
            <TableRow key={balance.username}>
              <TableCell component="th" scope="row">
                {balance.username}
              </TableCell>
              <TableCell align="right">{balance.balance.toFixed(2).toString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BalanceSheet;
