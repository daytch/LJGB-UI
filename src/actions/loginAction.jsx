import { HANDLE_CHANGE_LOGIN, GET_LOGIN, GET_SIGNUP } from '../constants/index';

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

export const actions = {
  handleState,
  getLogin,
  getSignUp
};
