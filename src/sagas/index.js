import { all } from 'redux-saga/effects';
import Home from './homeSaga';
import Detail from './detailSaga';
import Login from './loginSaga';
import Transaction from './transactionSaga';
import Profile from './profilesSaga';
import Layout from './layoutSaga';

export default function* rootSaga() {
  yield all([Layout(), Home(), Detail(), Login(), Transaction(), Profile()]);
}
