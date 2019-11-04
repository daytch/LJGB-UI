import { all } from 'redux-saga/effects';
import Home from './homeSaga';

export default function* rootSaga() {
  yield all([Home()]);
}
