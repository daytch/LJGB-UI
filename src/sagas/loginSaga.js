import { call, put, all, select, takeLatest } from 'redux-saga/effects';
// import { takeLatest } from 'redux-saga';
import { master } from '../services/header';
import Endpoint from '../services/endpoint';
import { warning, error, success } from '../components/Message';
import { GET, POST } from '../services/api';
import {
  API_DATA,
  SET_LOADER_LOGIN,
  GET_LOGIN,
  GET_SIGNUP,
  SET_DATA_LOGIN,
  GET_FORGOT
} from '../constants/index';
import swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import login from '../routes/login';

const getLogin = state => state.loginReducer;

export function* getDataLogin(action) {
  try {
    const Login = yield select(getLogin);
    let body = {
      email: Login.nameLogin,
      password: Login.passwordLogin
    };
    yield put({ type: SET_LOADER_LOGIN, payload: true });
    const data = yield call(
      POST,
      API_DATA + Endpoint.DATA_LOGIN,
      body,
      master.getHeader()
    );
    if (data.isSuccess) {
      localStorage.setItem('idToken', data.token);
      localStorage.setItem('name', data.name);
      yield put({ type: SET_DATA_LOGIN, payload: data.token });
      if (localStorage.getItem('path') !== null) {
        window.location.href = '/transaction' + localStorage.getItem('path');
      } else {
        window.location.href = '/';
      }
    } else {
      let message = data.message;
      warning(message);
    }
    yield put({ type: SET_LOADER_LOGIN, payload: false });
  } catch (err) {
    yield put({ type: SET_LOADER_LOGIN, payload: false });
    error(err);
  }
}

export function* getDataSignup(action) {
  try {
    yield put({ type: SET_LOADER_LOGIN, payload: true });
    const Login = yield select(getLogin);
    let body = {
      firstName: Login.firstName,
      lastName: Login.lastName,
      email: Login.email,
      password: Login.password,
      telp: Login.noHp
    };
    const data = yield call(
      POST,
      API_DATA + Endpoint.DATA_SIGNUP,
      body,
      master.getHeader()
    );
    if (data.isSuccess) {
      swal
        .fire({
          title: 'Success',
          text: data.message,
          type: 'success'
        })
        .then(function() {
          window.location.reload();
        });
      // success(data.message)
      // yield put({ type: SET_DATA_KOTA, payload: data.listKotas });
    } else {
      warning(data.message);
    }
    yield put({ type: SET_LOADER_LOGIN, payload: false });
  } catch (err) {
    error(err);
    yield put({ type: SET_LOADER_LOGIN, payload: false });
  }
}

export function* sendDataFogot(action) {
  try {
    yield put({ type: SET_LOADER_LOGIN, payload: true });
    const Login = yield select(getLogin);
    let body = {
      email: Login.emailForgot
    };
    const data = yield call(
      POST,
      API_DATA + Endpoint.FORGOT_PASSWORD,
      body,
      master.getHeader()
    );
    if (data.isSuccess) {
      swal
        .fire({
          title: 'Success',
          text: data.message,
          type: 'success'
        })
        .then(function() {
          window.location.reload();
        });
      // success(data.message)
      // yield put({ type: SET_DATA_KOTA, payload: data.listKotas });
    } else {
      warning(data.message);
    }
    yield put({ type: SET_LOADER_LOGIN, payload: false });
  } catch (err) {
    error(err);
    yield put({ type: SET_LOADER_LOGIN, payload: false });
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_LOGIN, getDataLogin),
    takeLatest(GET_SIGNUP, getDataSignup),
    takeLatest(GET_FORGOT, sendDataFogot)
  ]);
}
