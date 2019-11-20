import {
  HANDLE_CHANGE_LOGIN,
  SET_LOADER_LOGIN,
  SET_DATA_LOGIN
} from '../constants/index';

const INIT_STATE = {
  isLoading: false,
  nameLogin: '',
  passwordLogin: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordAgain: '',
  noHp: '',
  isLoginForm: true,
  token: localStorage.getItem('idToken')
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
    case SET_DATA_LOGIN: {
      return {
        ...state,
        token: action.payload
      };
    }
    default:
      return state;
  }
};
