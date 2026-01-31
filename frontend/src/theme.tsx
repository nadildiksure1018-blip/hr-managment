import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#1E3A8A' },   // Dark Blue for primary actions
    secondary: { main: '#406BCF' }, // Secondary color  
    info: { main: '#94ADF0' },  // highlights
    background: { 
        default: '#F1F1F1',
        paper: '#ffffff'
    },  
    text: { primary: '#374151', secondary: '#475569', disabled: '#6B7280' }, // Dark grey text
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',   // Modern sans-serif font
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h2: { fontSize: '2rem', fontWeight: 600 },   
    h3: { fontSize: '1.75rem', fontWeight: 500 },
    body1: { fontSize: '1rem', fontWeight: 700 },
    body2: { fontSize: '0.8rem', fontWeight: 400 },
    subtitle1: { fontSize: '1.25rem', fontWeight: 600 , color: '374151'},
    button: { textTransform: 'none', fontWeight: 600 },
    },
components: {
    MuiButton: {
      styleOverrides: {
        root: { 
            borderRadius: '8px',  // Rounded corners
            padding: '10px 20px',
            boxShadow: 'none',    // Flat design
        },
        containedPrimary: {
            backgroundColor: '#1E3A8A', // Dark Blue
            '&:hover': {
                backgroundColor: '#16325C', // Darker on hover
            },
        },  
        containedSecondary: {
            backgroundColor: '#406BCF', // Secondary color
            '&:hover': {
                backgroundColor: '#335CAD', // Darker on hover
            },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Rounded corners for cards
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
        },
      },
    },
  }
});  