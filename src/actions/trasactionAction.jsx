import {
  GET_DATA_DETAIL,
  GET_DATA_ALL_ASK,
  GET_DATA_WARNA,
  GET_PROCESS_DATA,
  GET_DATA_TRANSAKSI,
  HANDLE_CHANGE_TRANSAKSI,
  GET_DATA_ALL_BID,
  HANDLE_CHANGE_DETAIL
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

export function GetAllBid(property, value) {
  return {
    type: GET_DATA_ALL_BID,
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
    type: GET_PROCESS_DATA,
    property,
    value
  };
}

export function getDataTransaksi(property, value) {
  return {
    type: GET_DATA_TRANSAKSI
  };
}

export function handleChange(property, value) {
  let val = value === 'type' ? property.target.value : value.target.value;
  let prop = value === 'type' ? value : property;
  return {
    type: HANDLE_CHANGE_TRANSAKSI,
    prop,
    val
  };
}
export function handleChangeDetail(property, value) {
  return {
    type: HANDLE_CHANGE_DETAIL,
    property,
    value
  };
}

export const actions = {
  getDataDetail,
  GetAllAsk,
  GetAllBid,
  getDataWarna,
  processData,
  getDataTransaksi,
  handleChange,
  handleChangeDetail
};
