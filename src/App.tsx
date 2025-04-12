import React, { useCallback, useEffect } from 'react';
import Routes from './routes/Router';
import "./index.css";
import { useDispatch, useSelector } from 'react-redux';
import type { IRootReducer } from './store/reducers';
import { getSnackbarEvent, getUser } from './store/selectors';
import { useSnackbar } from 'notistack';
import { useUser } from './hooks/useUser';
import { setUser } from './store/actions/user.actions';

function App() {
  const { enqueueSnackbar } = useSnackbar();
  const state = useSelector((state:IRootReducer) => state);
  const snackEvent = getSnackbarEvent(state);
  const dispatch = useDispatch();

  const enqueueSnackbarCallback = useCallback(() => {
    const { content, variant } = snackEvent; 
    if (!content) return; 
    enqueueSnackbar(content, { variant, autoHideDuration: 1500, });
  }, [ snackEvent, enqueueSnackbar ]);

  const userId = React.useMemo(() => {
    const data = localStorage.getItem("user"); 
    return data ? JSON.parse(data)?._id || null : null;
  }, []);

  const { user } = useUser({ _id: userId });

  useEffect(() => {
    dispatch(setUser({ ...user }));
  }, [ user, dispatch ]);

  useEffect(() => {
    enqueueSnackbarCallback();
  }, [enqueueSnackbarCallback]);

  return (
    <React.Fragment>
      <Routes />
    </React.Fragment>
  );
}

export default App;
