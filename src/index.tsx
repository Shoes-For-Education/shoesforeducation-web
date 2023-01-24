import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./index.css";
import { Provider } from 'react-redux';
import store from "./store/index";
import { SnackbarProvider } from 'notistack';
import { createTheme, ThemeProvider } from '@mui/material';
import { createRoot } from 'react-dom/client';

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF6B6B",
    },
    secondary: {
      main: "#4ECDC4"
    }
  },
});

const container = document.getElementById('root');
const root = createRoot(container!); 

root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
      <Provider store={store}>
        <SnackbarProvider maxSnack={3}>
          <App />
        </SnackbarProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
