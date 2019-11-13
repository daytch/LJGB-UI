import {
  SET_DATA_DETAIL,
  SET_LOADER_DETAIL,
  HANDLE_CHANGE_DETAIL
} from '../constants/index';

const INIT_STATE = {
  isLoading: false,
  dataDetail: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_DATA_DETAIL: {
      return {
        ...state,
        dataDetail: action.payload
      };
    }
    case SET_LOADER_DETAIL: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case HANDLE_CHANGE_DETAIL: {
      return {
        ...state,
        [action.property]: {
          ...state[action.property],
          [action.index]: action.value
        }
      };
    }
    default:
      return state;
  }
};
