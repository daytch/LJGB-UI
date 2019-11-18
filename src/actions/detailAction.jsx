import { GET_DATA_DETAIL } from '../constants/index';

export function getDataDetail(property, value) {
  return {
    type: GET_DATA_DETAIL,
    property
  };
}

export const actions = {
  getDataDetail
};
