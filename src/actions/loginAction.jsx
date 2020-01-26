import {
  HANDLE_CHANGE_LOGIN,
  GET_LOGIN,
  GET_SIGNUP,
  GET_FORGOT,
  GET_CHANGE_PASSWORD,
  GET_ACIVATE_ACC
} from '../constants/index';

export function handleState(property, value) {
  let val = value.target.value;
  return {
    type: HANDLE_CHANGE_LOGIN,
    value: val,
    field: property
  };
}

export function getLogin(property, value) {
  return {
    type: GET_LOGIN
  };
}

export function getSignUp(property, value) {
  return {
    type: GET_SIGNUP
  };
}

export function getForgot(property, value) {
  return {
    type: GET_FORGOT
  };
}

export function getChangePassword(property, value) {
  return {
    type: GET_CHANGE_PASSWORD,
    property,
    value
  };
}
export function getActivateAcc(property, value) {
  return {
    type: GET_ACIVATE_ACC,
    property,
    value
  };
}

export const actions = {
  handleState,
  getLogin,
  getSignUp,
  getForgot,
  getChangePassword,
  getActivateAcc
};
