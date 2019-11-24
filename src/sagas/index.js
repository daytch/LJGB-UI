import { all } from 'redux-saga/effects';
import Home from './homeSaga';
import Detail from './detailSaga';
import Login from './loginSaga';
import Transaction from './transactionSaga';
import Profile from './profileSaga';

export default function* rootSaga() {
  yield all([Home(), Detail(), Login(), Transaction(), Profile()]);
}
