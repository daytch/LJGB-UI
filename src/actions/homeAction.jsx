import {
  GET_DATA_HOME,
  GET_DATA_KOTA,
  HANDLE_CHANGE_HOME,
  GET_DATA_BRAND
} from '../constants/index';

export function getDataHome(property, value) {
  return {
    type: GET_DATA_HOME
  };
}
export function getDataKota(property, value) {
  return {
    type: GET_DATA_KOTA
  };
}
export function handleChange(property, index, value) {
  return {
    type: HANDLE_CHANGE_HOME,
    property,
    index,
    value
  };
}
export function getDataBrand(property, event, value) {
  return {
    type: GET_DATA_BRAND,
    value
  };
}

export const actions = {
  getDataHome,
  getDataKota,
  handleChange,
  getDataBrand
};
