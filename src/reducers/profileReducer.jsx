import {
  HANDLE_CHANGE_PROFILE,
  SET_LOADER_PROFILE,
  SET_DATA_PROFILE,
  SET_DATA_TRX
} from '../constants/index';

const INIT_STATE = {
  isLoading: false,
  trx: [],
  profile: ''
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case HANDLE_CHANGE_PROFILE: {
      return {
        ...state,
        [action.field]: action.value
      };
    }
    case SET_LOADER_PROFILE: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case SET_DATA_PROFILE: {
      return {
        ...state,
        data: action.payload
      };
    }
    case SET_DATA_TRX: {
      return {
        ...state,
        trx: action.payload
      };
    }
    default:
      return state;
  }
};
