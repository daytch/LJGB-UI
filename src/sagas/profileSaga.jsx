import { call, put, all, select, takeLatest } from 'redux-saga/effects';
// import { takeLatest } from 'redux-saga';
import { master } from '../services/header';
import Endpoint from '../services/endpoint';
import { warning, error, success } from '../components/Message';
import { GET, POST } from '../services/api';
import {
  API_DATA,
  SET_LOADER_PROFILE,
  GET_DATA_PROFILE,
  SET_DATA_PROFILE,
  GET_DATA_TRX,
  SET_DATA_TRX
} from '../constants/index';
import swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import login from '../routes/login';

const getLogin = state => state.loginReducer;

export function* getDataProfile(action) {
  try {
    const Login = yield select(getLogin);
    let body = {
      email: Login.nameLogin,
      password: Login.passwordLogin
    };
    yield put({ type: SET_LOADER_PROFILE, payload: true });
    // const data = yield call(
    //     POST,
    //     API_DATA + Endpoint.DATA_LOGIN,
    //     body,
    //     master.getHeader()
    // );
    // if (data.isSuccess) {
    //     localStorage.setItem('idToken', data.token);
    //     yield put({ type: SET_DATA_PROFILE, payload: data.token });
    //     window.location.href = '/';
    // } else {
    //     let message = data.message;
    //     warning(message);
    // }
    yield put({ type: SET_LOADER_PROFILE, payload: false });
  } catch (err) {
    yield put({ type: SET_LOADER_PROFILE, payload: false });
    error(err);
  }
}

export function* getDataTrx(action) {
  try {
    yield put({ type: SET_LOADER_PROFILE, payload: true });
    const Login = yield select(getLogin);
    let body = {
      token: localStorage.getItem('idToken')
    };
    const data = yield call(
      POST,
      API_DATA + Endpoint.DATA_TRX,
      body,
      master.getHeader()
    );
    if (data.isSuccess) {
      yield put({ type: SET_DATA_TRX, payload: data.listBidAndBuy });
    } else {
      warning(data.message);
    }
    yield put({ type: SET_LOADER_PROFILE, payload: false });
  } catch (err) {
    error(err);
    yield put({ type: SET_LOADER_PROFILE, payload: false });
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_DATA_PROFILE, getDataProfile),
    takeLatest(GET_DATA_TRX, getDataTrx)
  ]);
}
