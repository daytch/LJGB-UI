import { call, put, all, select, takeLatest } from 'redux-saga/effects';
// import { takeLatest } from 'redux-saga';
import { master } from '../services/header';
import Endpoint from '../services/endpoint';
import { messages, warning, error } from '../components/Message';
import { GET, POST } from '../services/api';
import {
  API_DATA,
  GET_DATA_HOME,
  SET_DATA_HOME,
  GET_DATA_KOTA,
  SET_DATA_KOTA,
  GET_DATA_BRAND,
  SET_DATA_BRAND
} from '../constants/index';

const getHome = state => state.homeReducer;

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
      let message = data.message;
      warning(message);
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
    error(error);
  }
}

export function* getDataKota(action) {
  try {
    // yield put({ type: SET_ISLOADING, payload: true });
    let body = '';
    const data = yield call(
      GET,
      API_DATA + Endpoint.DATA_KOTA,
      master.getHeader()
    );
    if (data.isSuccess) {
      yield put({ type: SET_DATA_KOTA, payload: data.listKotas });
    } else {
      warning(data.message);
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
    error(error);
    // yield put({ type: SET_LOADER, payload: false });
    // messages('Info', error, 'info', false);
  }
}

export function* getDataBrand(action) {
  try {
    debugger;
    const home = yield select(getHome);
    // yield put({ type: SET_ISLOADING, payload: true });
    let body = '';
    const data = yield call(
      POST,
      API_DATA + Endpoint.DATA_BRAND,
      body,
      master.getHeader()
    );
    if (data.isSuccess) {
      yield put({ type: SET_DATA_BRAND, payload: data });
    } else {
      warning(data.message);
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
    error(error);
    // yield put({ type: SET_LOADER, payload: false });
    // messages('Info', error, 'info', false);
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_DATA_HOME, getDataHome),
    takeLatest(GET_DATA_KOTA, getDataKota),
    takeLatest(GET_DATA_BRAND, getDataBrand)
  ]);
}
