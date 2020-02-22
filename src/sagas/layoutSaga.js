import { call, put, all, takeLatest } from 'redux-saga/effects';
import { master } from '../services/header';
import Endpoint from '../services/endpoint';
import { warning, error } from '../components/Message';
import { GET } from '../services/api';
import {
  API_DATA,
  GET_DATA_ALL_MASTER,
  SET_DATA_ALL_MASTER
} from '../constants/index';

export function* getDataAllMaster(action) {
  try {
    console.log(action);
    const data = yield call(
      GET,
      API_DATA + Endpoint.DATA_MASTER,
      master.getHeader()
    );
    if (data.isSuccess) {
      var payload = {
        banner: [],
        contact: {
          socialMedia: {
            facebook: '',
            instagram: '',
            twitter: '',
            youtube: ''
          },
          contactCenter: ''
        }
      };
      data.list_CMSMaster.forEach(function(obj) {
        if (obj.category == 'Banner') {
          if (obj.value) {
            payload.banner.push(obj.value);
          }
        } else if (obj.description == 'Facebook') {
          payload.contact.socialMedia.facebook = obj.value;
        } else if (obj.description == 'Instagram') {
          payload.contact.socialMedia.instagram = obj.value;
        } else if (obj.description == 'Twitter') {
          payload.contact.socialMedia.twitter = obj.value;
        } else if (obj.description == 'Youtube') {
          payload.contact.socialMedia.youtube = obj.value;
        } else if (obj.description == 'Contact Center') {
          payload.contact.contactCenter = obj.value;
        }
      });
      console.log(payload);
      yield put({ type: SET_DATA_ALL_MASTER, payload: payload });
    } else {
      warning(data.message);
    }
  } catch (err) {
    error(err);
  }
}

export default function* rootSaga() {
  yield all([takeLatest(GET_DATA_ALL_MASTER, getDataAllMaster)]);
}
