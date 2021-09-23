import { createTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import Routes from './routes/Router';
import "./index.css";


function App() {

  const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: "#FF6B6B",
      },
      secondary: {
        main: "#4ECDC4"
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
