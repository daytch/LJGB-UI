import {
  GET_DATA_DETAIL,
  GET_DATA_ALL_ASK,
  GET_DATA_WARNA,
  GET_PROCESS_DATA,
  GET_DATA_TRANSAKSI
} from '../constants/index';

export function getDataDetail(property, value) {
  return {
    type: GET_DATA_DETAIL,
    property
  };
}

export function GetAllAsk(property, value) {
  return {
    type: GET_DATA_ALL_ASK,
    property
  };
}

export function getDataWarna(property, value) {
  return {
    type: GET_DATA_WARNA
  };
}

export function processData(property, value) {
  return {
    type: GET_PROCESS_DATA
  };
}

export function getDataTransaksi(property, value) {
  return {
    type: GET_DATA_TRANSAKSI
  };
}

export const actions = {
  getDataDetail,
  GetAllAsk,
  getDataWarna,
  processData,
  getDataTransaksi
};
