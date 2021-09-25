import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@material-ui/core';
import "./index.css";
import { Provider } from 'react-redux';
import store from "./store/index";
import { SnackbarProvider } from 'notistack';

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


ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
      <Provider store={store}>
        <SnackbarProvider maxSnack={3}>
          <App />
        </SnackbarProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
