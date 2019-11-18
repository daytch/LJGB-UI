import { call, put, all, select, takeLatest } from 'redux-saga/effects';
// import { takeLatest } from 'redux-saga';
import { master } from '../services/header';
import Endpoint from '../services/endpoint';
import { messages } from '../components/Message';
import { GET, POST } from '../services/api';
import {
  API_DATA,
  GET_DATA_DETAIL,
  SET_DATA_DETAIL,
  GET_DATA_ALL_ASK,
  GET_DATA_POSITON_ASK,
  SET_DATA_POSITON_ASK,
  SET_DATA_ALL_ASK
} from '../constants/index';

export function* getDataDetail(action) {
  try {
    // yield put({ type: SET_ISLOADING, payload: true });
    let body = { postId: parseInt(action.property) };
    const data = yield call(
      POST,
      API_DATA + Endpoint.DATA_DETAIL,
      body,
      master.getHeader()
    );
    if (data.isSuccess) {
      yield put({ type: SET_DATA_DETAIL, payload: data });
    } else {
      messages('Warning', data.message, 'warning', false);
    }
  } catch (error) {
    console.log(error);
    // yield put({ type: SET_LOADER, payload: false });
    // messages('Info', error, 'info', false);
  }
}

export function* getDataPositionAsk(action) {
  try {
    // yield put({ type: SET_ISLOADING, payload: true });
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
      messages('Warning', data.message, 'warning', false);
    }
  } catch (error) {
    console.log(error);
    // yield put({ type: SET_LOADER, payload: false });
    // messages('Info', error, 'info', false);
  }
}

export function* getDataAllAsk(action) {
  try {
    // yield put({ type: SET_ISLOADING, payload: true });
    let body = { postId: parseInt(action.property) };
    const data = yield call(
      GET,
      API_DATA + Endpoint.DATA_ALL_ASK,
      master.getHeader()
    );
    if (data.isSuccess) {
      // yield put({ type: SET_DATA_ALL_ASK, payload: data });
    } else {
      messages('Warning', data.message, 'warning', false);
    }
  } catch (error) {
    console.log(error);
    // yield put({ type: SET_LOADER, payload: false });
    // messages('Info', error, 'info', false);
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_DATA_DETAIL, getDataDetail),
    takeLatest(GET_DATA_ALL_ASK, getDataAllAsk),
    takeLatest(GET_DATA_POSITON_ASK, getDataPositionAsk)
  ]);
}
