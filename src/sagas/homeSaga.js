import { call, put, all, select, takeLatest } from 'redux-saga/effects';
// import { takeLatest } from 'redux-saga';
import { master } from '../services/header';
import Endpoint from '../services/endpoint';
import { warning, error } from '../components/Message';
import { GET, POST } from '../services/api';
import {
  API_DATA,
  GET_DATA_HOME,
  SET_DATA_HOME,
  GET_DATA_KOTA,
  SET_DATA_KOTA,
  GET_DATA_BRAND,
  SET_DATA_BRAND,
  SET_LOADER_HOME,
  GET_DATA_MODEL,
  SET_DATA_MODEL,
  GET_DATA_TYPE,
  SET_DATA_TYPE,
  SET_LOADER_MINI
} from '../constants/index';

const getHome = state => state.homeReducer;

export function* getDataHome(action) {
  try {
    const home = yield select(getHome);
    let body =
      home.search.cityText === '' ? 'Jakarta Utara' : home.search.cityText;
    yield put({ type: SET_LOADER_MINI, payload: true });
    const data = yield call(
      GET,
      API_DATA + Endpoint.DATA_HOME + '?city=' + body,
      master.getHeader()
    );
    if (data.isSuccess) {
      yield put({ type: SET_DATA_HOME, payload: data });
    } else {
      let message = data.message;
      warning(message);
    }
    yield put({ type: SET_LOADER_MINI, payload: false });
  } catch (err) {
    yield put({ type: SET_LOADER_MINI, payload: false });
    error(err);
  }
}

export function* getDataKota(action) {
  try {
    // yield put({ type: SET_ISLOADING, payload: true });
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
  } catch (err) {
    error(err);
    // yield put({ type: SET_LOADER, payload: false });
    // messages('Info', error, 'info', false);
  }
}

export function* getDataBrand(action) {
  try {
    yield put({ type: SET_LOADER_HOME, payload: true });
    let body = action.value;
    const data = yield call(
      POST,
      API_DATA + Endpoint.DATA_MERK_BY_ID_KOTA + '?KotaID=' + body,
      master.getHeader()
    );
    if (data.isSuccess) {
      let dataMerk = [];
      data.listSP_MerkByKotaID.map((x, i) => {
        dataMerk.push({
          id: x.id,
          text: x.name
        });
      });
      yield put({ type: SET_DATA_BRAND, payload: dataMerk });
    } else {
      warning(data.message);
    }
    yield put({ type: SET_LOADER_HOME, payload: false });
  } catch (err) {
    yield put({ type: SET_LOADER_HOME, payload: false });
    error(err);
    // yield put({ type: SET_LOADER, payload: false });
    // messages('Info', error, 'info', false);
  }
}

export function* getDataModel(action) {
  try {
    const home = yield select(getHome);
    yield put({ type: SET_LOADER_HOME, payload: true });
    let body = {
      merkID: home.search.brand,
      kotaID: home.search.city
    };
    const data = yield call(
      POST,
      API_DATA + Endpoint.DATA_BRAND_BY_ID_MERK,
      body,
      master.getHeader()
    );
    if (data.isSuccess) {
      let dataMerk = [];
      data.listModel.map((x, i) => {
        dataMerk.push({
          id: x.id,
          text: x.name
        });
      });
      yield put({ type: SET_DATA_MODEL, payload: dataMerk });
    } else {
      warning(data.message);
    }
    yield put({ type: SET_LOADER_HOME, payload: false });
  } catch (err) {
    yield put({ type: SET_LOADER_HOME, payload: false });
    error(err);
    // yield put({ type: SET_LOADER, payload: false });
    // messages('Info', error, 'info', false);
  }
}

export function* getDataType(action) {
  try {
    const home = yield select(getHome);
    yield put({ type: SET_LOADER_HOME, payload: true });
    let body = {
      merkID: home.search.brand,
      kotaID: home.search.city,
      modelID: home.search.model
    };
    const data = yield call(
      POST,
      API_DATA + Endpoint.DATA_TYPE_BY_ID_BRAND,
      body,
      master.getHeader()
    );
    if (data.isSuccess) {
      let dataMerk = [];
      data.listSP__TypeByKotaIDMerkIDModelID.map((x, i) => {
        dataMerk.push({
          id: x.id,
          text: x.name
        });
      });
      yield put({ type: SET_DATA_TYPE, payload: dataMerk });
    } else {
      warning(data.message);
    }
    yield put({ type: SET_LOADER_HOME, payload: false });
  } catch (err) {
    yield put({ type: SET_LOADER_HOME, payload: false });
    error(err);
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_DATA_HOME, getDataHome),
    takeLatest(GET_DATA_KOTA, getDataKota),
    takeLatest(GET_DATA_BRAND, getDataBrand),
    takeLatest(GET_DATA_MODEL, getDataModel),
    takeLatest(GET_DATA_TYPE, getDataType)
  ]);
}
