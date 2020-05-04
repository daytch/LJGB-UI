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
    const data = yield call(
      GET,
      API_DATA + Endpoint.DATA_MASTER,
      master.getHeader()
    );
    if (data.isSuccess) {
      var payload = {
        banner: {
          desktop: [],
          tablet: [],
          phone: [],
          current: []
        },
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
          // descList = ["Banner", "1"] | ["Tablet", "Banner", "1"] | ["Phone", "Banner", "1"]

          var descList = obj.description.split(' ');
          var idx = (descList[2] || descList[1]) - 1;
          var key =
            descList[0].toLowerCase() == 'banner'
              ? 'desktop'
              : descList[0].toLowerCase();
          payload.banner[key] = [...payload.banner[key], obj.value];
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
      if (window.innerWidth >= 992) {
        payload.banner.current = payload.banner.desktop;
      } else if (window.innerWidth >= 768) {
        payload.banner.current = payload.banner.tablet;
      } else {
        payload.banner.current = payload.banner.phone;
      }
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
