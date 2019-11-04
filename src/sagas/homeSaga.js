import { call, put, all, select, takeLatest } from 'redux-saga/effects';
// import { takeLatest } from 'redux-saga';
import { master } from '../services/header';
import Endpoint from '../services/endpoint';
import { messages } from '../components/Message';
import { GET } from '../services/api';
import { API_DATA, GET_DATA_HOME, SET_DATA_HOME } from '../constants/index';

export function* getDataHome(action) {
  try {
    // yield put({ type: SET_ISLOADING, payload: true });
    const data = yield call(
      GET,
      API_DATA + Endpoint.DATA_HOME + '?city=jakarta%20utara',
      master.getHeader()
    );
    if (data.isSuccess) {
      yield put({ type: SET_DATA_HOME, payload: data });
    } else {
      messages('Warning', data.message, 'warning', false);
    }
    // yield put({ type: SET_DATA_AKTIVITAS, data });
    // yield put({
    //     type: SET_LOADER, payload: {
    //         isLoading: false,
    //         eventLoaded: true
    //     }
    // });
  } catch (error) {
    console.log(error);
    // yield put({ type: SET_LOADER, payload: false });
    // messages('Info', error, 'info', false);
  }
}

export default function* rootSaga() {
  yield all([takeLatest(GET_DATA_HOME, getDataHome)]);
}
