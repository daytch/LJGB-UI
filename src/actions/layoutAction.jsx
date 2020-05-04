import { GET_DATA_ALL_MASTER, SET_DATA_BANNER } from '../constants/index';

export function getDataAllMaster(property, value) {
  return {
    type: GET_DATA_ALL_MASTER,
    property
  };
}
export function setDataBanner(data) {
  return {
    type: SET_DATA_BANNER,
    payload: data
  };
}

export const actions = {
  getDataAllMaster,
  setDataBanner
};
