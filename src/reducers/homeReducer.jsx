import {
  SET_DATA_HOME,
  SET_LOADER_HOME,
  SET_DATA_KOTA,
  HANDLE_CHANGE_HOME,
  SET_DATA_BRAND
} from '../constants/index';

const INIT_STATE = {
  isLoading: false,
  dataHome: {
    lowestAsks: [],
    highestBids: [],
    listNormal: [],
    carDetail: '',
    relatedProducts: '',
    listAsks: ''
  },
  dataKota: [],
  dataBrand: [],
  dataModel: [],
  dataType: [],
  search: {
    city: ''
  }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_DATA_HOME: {
      return {
        ...state,
        dataHome: action.payload
      };
    }
    case SET_LOADER_HOME: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case SET_DATA_KOTA: {
      return {
        ...state,
        dataKota: action.payload
      };
    }
    case HANDLE_CHANGE_HOME: {
      return {
        ...state,
        [action.property]: {
          ...state[action.property],
          [action.index]: action.value
        }
      };
    }
    case SET_DATA_BRAND: {
      return {
        ...state,
        dataBrand: action.payload
      };
    }
    default:
      return state;
  }
};
