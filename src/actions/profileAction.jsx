import {
  HANDLE_CHANGE_PROFILE,
  GET_DATA_PROFILE,
  GET_DATA_TRX
} from '../constants/index';

export function handleChange(property, index, value) {
  return {
    type: HANDLE_CHANGE_PROFILE,
    property,
    index,
    value
  };
}

export function getDataProfile(property, index, value) {
  return {
    type: GET_DATA_PROFILE
  };
}
export function getDataTrx(property, value) {
  return {
    type: GET_DATA_TRX
  };
}

export const actions = {
  handleChange,
  getDataProfile,
  getDataTrx
};
