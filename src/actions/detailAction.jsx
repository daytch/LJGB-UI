import { GET_DATA_DETAIL, GET_DATA_ALL_ASK } from '../constants/index';

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

export const actions = {
  getDataDetail,
  GetAllAsk
};
