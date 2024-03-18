import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Link, Button, Container, Grid, Paper, Box } from '@mui/material';

function Homepage() {
  return (
    <Container maxWidth="md" sx={{
      minHeight: '50vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // Centers the Paper vertically
      bgcolor: '#121212', // Dark theme background
      color: '#ffffff',
    }}>
      <Paper elevation={6} sx={{
        py: 5,
        px: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#1E1E1E', // Adjusted to match the screenshot
        borderRadius: 2,
        color: '#ffffff',
      }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Daniel Ye
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          This is my website :)
        </Typography>
        <Box my={4}>
          {/* Links are horizontally aligned */}
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Link component={RouterLink} to="/about" underline="none" color="inherit" variant="h6" sx={{ mx: 2 }}>
                About Me
              </Link>
            </Grid>
            <Grid item>
              <Link href="../../public/Daniel_Ye_Resume.pdf" target="_blank" rel="noopener noreferrer" underline="none" color="inherit" variant="h6" sx={{ mx: 2 }}>
                Resume
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://linkedin.com/in/danielyedaniel" target="_blank" rel="noopener noreferrer" underline="none" color="inherit" variant="h6" sx={{ mx: 2 }}>
                LinkedIn
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://github.com/danielyedaniel" target="_blank" rel="noopener noreferrer" underline="none" color="inherit" variant="h6" sx={{ mx: 2 }}>
                Github
              </Link>
            </Grid>
          </Grid>
        </Box>
        {/* Balance Sheet button centered and styled according to the screenshot */}
        <Button variant="contained" color="primary" component={RouterLink} to="/blackjack" sx={{ mt: 3, borderRadius: 20 }}>
          Balance Sheet
        </Button>
      </Paper>
    </Container>
  );
}

export default Homepage;
