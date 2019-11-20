import {
  SET_DATA_DETAIL,
  SET_LOADER_DETAIL,
  HANDLE_CHANGE_DETAIL,
  SET_DATA_ALL_ASK,
  SET_DATA_WARNA,
  SET_DATA_TRANSAKSI,
  HANDLE_CHANGE_TRANSAKSI,
  SET_DATA_ALL_BID
} from '../constants/index';

const INIT_STATE = {
  isLoading: false,
  dataDetail: {
    carDetail: {
      name: '',
      description: '',
      highestbid: '',
      lowestask: '',
      year: ''
    },
    sP_GetPhotoAndWarnaByBarangIDS: []
  },
  dataAllAsk: [],
  dataAllBid: [],
  dataColor: [],
  dataTransaction: [],
  price: '',
  type: '',
  highestbid: '',
  lowestask: '',
  year: ''
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
    case SET_DATA_ALL_ASK: {
      return {
        ...state,
        dataAllAsk: action.payload
      };
    }
    case SET_DATA_ALL_BID: {
      return {
        ...state,
        dataAllBid: action.payload
      };
    }
    case SET_DATA_WARNA: {
      return {
        ...state,
        dataColor: action.payload
      };
    }
    case SET_DATA_TRANSAKSI: {
      return {
        ...state,
        dataTransaction: action.payload
      };
    }
    case HANDLE_CHANGE_TRANSAKSI: {
      return {
        ...state,
        [action.prop]: action.val
      };
    }
    default:
      return state;
  }
};
