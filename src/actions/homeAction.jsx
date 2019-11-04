import { GET_DATA_HOME } from '../constants/index';

export function getDataHome(property, value) {
  return {
    type: GET_DATA_HOME
  };
}

export const actions = {
  getDataHome
};
