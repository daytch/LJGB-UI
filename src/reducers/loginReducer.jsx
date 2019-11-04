import { HANDLE_CHANGE_LOGIN, SET_LOADER_LOGIN } from '../constants/index';

const INIT_STATE = {
  isLoading: false,
  name: 'test',
  password: 'test'
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case HANDLE_CHANGE_LOGIN: {
      return {
        ...state,
        [action.field]: action.value
      };
    }
    case SET_LOADER_LOGIN: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    default:
      return state;
  }
};
