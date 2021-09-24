import { createTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import Routes from './routes/Router';
import "./index.css";
import { Provider } from 'react-redux';
import store from "./store/index";


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
      <Provider store={store}>
        <Routes />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
