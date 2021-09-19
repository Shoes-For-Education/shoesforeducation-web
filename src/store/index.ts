import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import createSagaMiddleware from 'redux-saga';

import createRootReducer, { IRootReducer } from './reducers';
import rootSaga from './sagas';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'auth',
  ],
};

export const history = createBrowserHistory();

const reducer = createRootReducer(history);
const persistedReducer = persistReducer(
  persistConfig,
  (state: IRootReducer | undefined, action) => {
    if (action.type === 'USER_SIGN_OUT') {
      state = undefined;
    }
    return reducer(state, action);
  }
);
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware, routerMiddleware(history))
);
const store = createStore(persistedReducer, enhancer);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;