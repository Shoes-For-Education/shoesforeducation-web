import { all, put, takeLatest } from 'redux-saga/effects';
import { PERSIST, PURGE } from 'redux-persist';
import authSaga from './auth.saga';
import paymentSaga from './payment.saga';
import bookFormSaga from './book-form.saga';

function* persistHandler() {
  const deployId = window.localStorage.getItem('deployId') || '';
  if ((process.env.REACT_APP_DEPLOY_ID || '') !== deployId) {
    yield put({
      type: PURGE,
      result: () => {},
    });
    window.localStorage.setItem(
      'deployId',
      process.env.REACT_APP_DEPLOY_ID || ''
    );
  }
}

export default function* rootSaga() {
  yield all([
    authSaga(),
    paymentSaga(),
    bookFormSaga(),
    takeLatest(PERSIST, persistHandler),
  ]);
}