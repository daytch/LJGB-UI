import { call, put, all, select, takeLatest } from 'redux-saga/effects';
// import { takeLatest } from 'redux-saga';
import { master } from '../services/header';
import Endpoint from '../services/endpoint';
import { warning, error, success } from '../components/Message';
import { GET, POST } from '../services/api';
import {
  API_DATA,
  GET_DATA_DETAIL,
  SET_DATA_DETAIL,
  GET_DATA_ALL_ASK,
  GET_DATA_POSITON_ASK,
  // SET_DATA_POSITON_ASK,
  SET_DATA_ALL_ASK,
  GET_DATA_ALL_BID,
  SET_DATA_ALL_BID,
  SET_LOADER_DETAIL,
  GET_DATA_WARNA,
  SET_DATA_WARNA,
  GET_PROCESS_DATA,
  GET_DATA_TRANSAKSI,
  SET_DATA_TRANSAKSI,
  HANDLE_CHANGE_DETAIL
} from '../constants/index';

const getDetail = state => state.detailReducer;

export function* getDataDetail(action) {
  try {
    yield put({ type: SET_LOADER_DETAIL, payload: true });
    let body = parseInt(action.property);
    const data = yield call(
      GET,
      API_DATA + Endpoint.DATA_DETAIL + '?Id=' + body,
      // body,
      master.getHeader()
    );
    if (data.isSuccess) {
      yield put({ type: SET_DATA_DETAIL, payload: data });
      if (data.sP_GetPhotoAndWarnaByBarangIDS.length > 0) {
        yield put({
          type: HANDLE_CHANGE_DETAIL,
          value: data.sP_GetPhotoAndWarnaByBarangIDS[0].color,
          property: 'colorDetail'
        });
        yield put({
          type: HANDLE_CHANGE_DETAIL,
          value: data.sP_GetPhotoAndWarnaByBarangIDS[0].year,
          property: 'yearDetail'
        });
        yield put({
          type: HANDLE_CHANGE_DETAIL,
          value: data.sP_GetPhotoAndWarnaByBarangIDS[0].lowestask,
          property: 'ask'
        });
        yield put({
          type: HANDLE_CHANGE_DETAIL,
          value: data.sP_GetPhotoAndWarnaByBarangIDS[0].highestbid,
          property: 'bid'
        });
      }
    } else {
      warning(data.message);
    }
    yield put({ type: SET_LOADER_DETAIL, payload: false });
  } catch (err) {
    yield put({ type: SET_LOADER_DETAIL, payload: false });
    error(err);
  }
}

export function* getDataPositionAsk(action) {
  try {
    yield put({ type: SET_LOADER_DETAIL, payload: true });
    let id = 1; //action.property
    let nominal = 2000; //action.value
    const data = yield call(
      GET,
      API_DATA +
        Endpoint.DATA_POSITION_ASK +
        '?Id=' +
        id +
        '&Nominal=' +
        nominal,
      master.getHeader()
    );
    if (data.isSuccess) {
      // yield put({ type: SET_DATA_POSITON_ASK, payload: data });
    } else {
      warning(data.message);
    }
    yield put({ type: SET_LOADER_DETAIL, payload: false });
  } catch (err) {
    yield put({ type: SET_LOADER_DETAIL, payload: false });
    error(err);
  }
}

export function* getDataAllAsk(action) {
  try {
    yield put({ type: SET_LOADER_DETAIL, payload: true });
    let body = parseInt(action.property);
    const data = yield call(
      GET,
      API_DATA + Endpoint.DATA_ALL_ASK + '?ID=' + body,
      master.getHeader()
    );
    if (data.isSuccess) {
      yield put({ type: SET_DATA_ALL_ASK, payload: data.listAsks });
    } else {
      warning(data.message);
    }
    yield put({ type: SET_LOADER_DETAIL, payload: false });
  } catch (err) {
    yield put({ type: SET_LOADER_DETAIL, payload: false });
    error(err);
  }
}

export function* getDataAllBid(action) {
  try {
    yield put({ type: SET_LOADER_DETAIL, payload: true });
    let body = parseInt(action.property);
    const data = yield call(
      GET,
      API_DATA + Endpoint.DATA_ALL_BID + '?ID=' + body,
      master.getHeader()
    );
    if (data.isSuccess) {
      yield put({ type: SET_DATA_ALL_BID, payload: data.listBids });
    } else {
      warning(data.message);
    }
    yield put({ type: SET_LOADER_DETAIL, payload: false });
  } catch (err) {
    yield put({ type: SET_LOADER_DETAIL, payload: false });
    error(err);
  }
}

export function* getDataWarna(action) {
  try {
    yield put({ type: SET_LOADER_DETAIL, payload: true });
    // let body = parseInt(action.property);
    const data = yield call(
      GET,
      API_DATA + Endpoint.DATA_WARNA_BY_ID,
      master.getHeader()
    );
    if (data.isSuccess) {
      yield put({ type: SET_DATA_WARNA, payload: data.data });
    } else {
      warning(data.message);
    }
    yield put({ type: SET_LOADER_DETAIL, payload: false });
  } catch (err) {
    yield put({ type: SET_LOADER_DETAIL, payload: false });
    error(err);
  }
}

export function* getProcessData(action) {
  try {
    const detail = yield select(getDetail);
    yield put({ type: SET_LOADER_DETAIL, payload: true });
    let body = {
      userProfileID: 3,
      barangID: 1,
      typePenawaran: detail.type,
      harga: detail.price,
      created: new Date(),
      createdBy: 'string'
    };
    let askBid =
      action.property == 'bid'
        ? Endpoint.PROCESS_DATA_BID
        : Endpoint.PROCESS_DATA_ASK;
    const data = yield call(POST, API_DATA + askBid, body, master.getHeader());
    debugger;
    if (data.isSuccess) {
      success(data.message);
      // yield put({ type: SET_DATA_WARNA, payload: data.data });
    } else {
      warning(data.message);
    }
    yield put({ type: SET_LOADER_DETAIL, payload: false });
  } catch (err) {
    yield put({ type: SET_LOADER_DETAIL, payload: false });
    error(err);
  }
}

export function* getDataTransaction(action) {
  try {
    yield put({ type: SET_LOADER_DETAIL, payload: true });
    let body = {
      id: 1,
      negoType: 'ask'
    };
    const data = yield call(
      POST,
      API_DATA + Endpoint.DATA_TRANSACTION,
      body,
      master.getHeader()
    );
    if (data.isSuccess) {
      // success(data.message);
      yield put({
        type: SET_DATA_TRANSAKSI,
        payload: data.sP_GetPhotoAndWarnaByBarangIDS
      });
    } else {
      warning(data.message);
    }
    yield put({ type: SET_LOADER_DETAIL, payload: false });
  } catch (err) {
    yield put({ type: SET_LOADER_DETAIL, payload: false });
    error(err);
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_DATA_DETAIL, getDataDetail),
    takeLatest(GET_DATA_ALL_ASK, getDataAllAsk),
    takeLatest(GET_DATA_ALL_BID, getDataAllBid),
    takeLatest(GET_DATA_POSITON_ASK, getDataPositionAsk),
    takeLatest(GET_DATA_WARNA, getDataWarna),
    takeLatest(GET_PROCESS_DATA, getProcessData),
    takeLatest(GET_DATA_TRANSAKSI, getDataTransaction)
  ]);
}
