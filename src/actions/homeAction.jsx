import {
  GET_DATA_HOME,
  GET_DATA_KOTA,
  HANDLE_CHANGE_HOME,
  GET_DATA_BRAND,
  GET_DATA_MODEL,
  GET_DATA_TYPE,
  GET_DATA_SEARCH
} from '../constants/index';

export function getDataHome(property, index, value) {
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
export function getDataModel(property, event, value) {
  return {
    type: GET_DATA_MODEL,
    value
  };
}
export function getDataType(property, event, value) {
  return {
    type: GET_DATA_TYPE,
    value
  };
}

export function getSearch(property, event, value) {
  return {
    type: GET_DATA_SEARCH,
    value
  };
}

export const actions = {
  getDataHome,
  getDataKota,
  handleChange,
  getDataBrand,
  getDataModel,
  getDataType,
  getSearch
};
