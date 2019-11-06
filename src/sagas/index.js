import { all } from 'redux-saga/effects';
import Home from './homeSaga';
import Detail from './detailSaga';

export default function* rootSaga() {
  yield all([Home(), Detail()]);
}
