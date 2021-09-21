import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { useUsers } from './hooks/useUsers';
import Routes from './routes/Router';


function App() {
  const users = useUsers();

  console.log(users);

  const theme = createMuiTheme({
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
