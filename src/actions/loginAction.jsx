import { HANDLE_CHANGE_LOGIN } from '../constants/index';

export function handleState(property, value) {
  let val = value.target.value;
  return {
    type: HANDLE_CHANGE_LOGIN,
    value: val,
    field: property
  };
}

export const actions = {
  handleState
};
