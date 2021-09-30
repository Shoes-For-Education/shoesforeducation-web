import React, { useCallback, useEffect } from 'react';
import Routes from './routes/Router';
import "./index.css";
import { useSelector } from 'react-redux';
import { IRootReducer } from './store/reducers';
import { getSnackbarEvent, getUser } from './store/selectors';
import { useSnackbar } from 'notistack';

function App() {
  const { enqueueSnackbar } = useSnackbar();
  const state = useSelector((state:IRootReducer) => state);
  const snackEvent = getSnackbarEvent(state);

  const enqueueSnackbarCallback = useCallback(() => {
    const { content, variant } = snackEvent; 
    if (!content) return; 
    enqueueSnackbar(content, { variant, autoHideDuration: 1500, });
  }, [ snackEvent ]);

  useEffect(enqueueSnackbarCallback, [ enqueueSnackbarCallback ]);

  return (
    <React.Fragment>
      <Routes />
    </React.Fragment>
  );
}

export default App;
