import { all } from 'redux-saga/effects';
import Home from './homeSaga';
import Detail from './detailSaga';
import Login from './loginSaga';

export default function* rootSaga() {
  yield all([Home(), Detail(), Login()]);
}
