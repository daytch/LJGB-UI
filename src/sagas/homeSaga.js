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
  SET_LOADER_MINI,
  GET_DATA_SEARCH,
  SET_DATA_SEARCH,
  SET_DATA_PROVINSI,
  GET_DATA_PROVINSI,
  HANDLE_CHANGE_HOME
} from '../constants/index';

const getHome = state => state.homeReducer;

export function* getDataHome(action) {
  try {
    const home = yield select(getHome);
    let body = home.search.cityText;
    // home.search.cityText === '' ? 'Jakarta (Plat Nomor "B")' : home.search.cityText;
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
      modelBarangID: home.search.model
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

export function* getDataSearch(action) {
  try {
    const home = yield select(getHome);
    let body = {
      kotaID:
        home.search.city.length === 0
          ? localStorage.getItem('city') == null
            ? null
            : parseInt(localStorage.getItem('city'))
          : home.search.city,
      merkID:
        home.search.brand.length === 0
          ? localStorage.getItem('brand') == null
            ? null
            : parseInt(localStorage.getItem('brand'))
          : home.search.brand,
      modelBarangID:
        home.search.model.length === 0
          ? localStorage.getItem('model') == null
            ? null
            : parseInt(localStorage.getItem('model'))
          : home.search.model,
      typeID:
        home.search.type.length === 0
          ? localStorage.getItem('type') == null
            ? null
            : parseInt(localStorage.getItem('type'))
          : home.search.type,
      start: home.search.dataNumber,
      limit: home.search.pageSize
    };
    yield put({ type: SET_LOADER_MINI, payload: true });
    yield put({ type: SET_LOADER_HOME, payload: true });
    const data = yield call(
      POST,
      API_DATA + Endpoint.DATA_SEARCH,
      body,
      master.getHeader()
    );
    if (data.isSuccess) {
      let dataAll = [];
      data.sp_GetBarangByHomeParameters.map((x, i) => {
        dataAll.push({
          image: x.photopath,
          name: x.name,
          price: x.price === undefined ? '' : x.price,
          id: x.id
        });
      });
      yield put({ type: SET_DATA_SEARCH, payload: dataAll });
      yield put({
        type: HANDLE_CHANGE_HOME,
        property: 'search',
        index: 'total',
        value: data.total
      });
      let type =
        home.search.type.length === 0
          ? localStorage.getItem('type') == null
            ? null
            : localStorage.getItem('type')
          : home.search.type;
      if (type !== null && type !== '') {
        window.location.href =
          '/detail?id=' + data.sp_GetBarangByHomeParameters[0].id;
      }
      // else {
      //   window.location.href = '/search'
      // }
    } else {
      let message = data.message;
      warning(message);
    }
    yield put({ type: SET_LOADER_HOME, payload: false });
    yield put({ type: SET_LOADER_MINI, payload: false });
  } catch (err) {
    yield put({ type: SET_LOADER_MINI, payload: false });
    error(err);
  }
}

export function* getDataProvinsi(action) {
  try {
    // const home = yield select(getHome);
    yield put({ type: SET_LOADER_HOME, payload: true });
    const data = yield call(
      GET,
      API_DATA + Endpoint.DATA_PROVINSI,
      master.getHeader()
    );
    if (data.isSuccess) {
      yield put({ type: SET_DATA_PROVINSI, payload: data.listProvinces });
    } else {
      let message = data.message;
      warning(message);
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
    takeLatest(GET_DATA_SEARCH, getDataSearch),
    takeLatest(GET_DATA_TYPE, getDataType),
    takeLatest(GET_DATA_PROVINSI, getDataProvinsi)
  ]);
}
