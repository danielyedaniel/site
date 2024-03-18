import { createTheme } from '@mui/material/styles';


export const appStyle = {
  minHeight: '100vh',
  color: 'white',
  fontFamily: 'monospace',
  textAlign: 'center',
  backgroundColor: '#120A2F',
  padding: '20px',
};

export const linkStyle = {
  color: '#007BFF',
  textDecoration: 'none',
  margin: '0 10px',
};

export const linksContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  listStyleType: 'none',
  padding: 0,
  marginTop: '20px',
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#ff0000',
    },
    background: {
      default: '#121212',
    },
  },
  typography: {

    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
    },
  },
});

export default theme