import { GET_DATA_ALL_MASTER } from '../constants/index';

export function getDataAllMaster(property, value) {
  return {
    type: GET_DATA_ALL_MASTER,
    property
  };
}

export const actions = {
  getDataAllMaster
};
