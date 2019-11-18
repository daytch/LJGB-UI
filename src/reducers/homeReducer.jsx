import {
  SET_DATA_HOME,
  SET_LOADER_HOME,
  SET_DATA_KOTA,
  HANDLE_CHANGE_HOME,
  SET_DATA_BRAND,
  SET_DATA_MODEL,
  SET_DATA_TYPE,
  SET_LOADER_MINI,
  SET_DATA_SEARCH
} from '../constants/index';

const INIT_STATE = {
  isLoading: false,
  isLoadingHome: false,
  dataHome: {
    lowestAsks: [
      { image: '', name: '', price: '' },
      { image: '', name: '', price: '' },
      { image: '', name: '', price: '' },
      { image: '', name: '', price: '' },
      { image: '', name: '', price: '' }
    ],
    highestBids: [
      { image: '', name: '', price: '' },
      { image: '', name: '', price: '' },
      { image: '', name: '', price: '' },
      { image: '', name: '', price: '' },
      { image: '', name: '', price: '' }
    ],
    listNormal: [
      { image: '', name: '', price: '' },
      { image: '', name: '', price: '' },
      { image: '', name: '', price: '' },
      { image: '', name: '', price: '' },
      { image: '', name: '', price: '' }
    ],
    carDetail: '',
    relatedProducts: '',
    listAsks: ''
  },
  dataKota: [],
  dataBrand: [],
  dataModel: [],
  dataType: [],
  search: {
    city: '',
    cityText: '',
    brand: '',
    model: '',
    type: '',
    dataNumber: 1,
    pageSize: 10
  },
  dataSearch: [
    { image: '', name: '', price: '' },
    { image: '', name: '', price: '' },
    { image: '', name: '', price: '' },
    { image: '', name: '', price: '' },
    { image: '', name: '', price: '' }
  ]
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_DATA_HOME: {
      return {
        ...state,
        dataHome: action.payload
      };
    }
    case SET_LOADER_MINI: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case SET_LOADER_HOME: {
      return {
        ...state,
        isLoadingHome: action.payload
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
    case SET_DATA_MODEL: {
      return {
        ...state,
        dataModel: action.payload
      };
    }
    case SET_DATA_TYPE: {
      return {
        ...state,
        dataType: action.payload
      };
    }
    case SET_DATA_SEARCH: {
      return {
        ...state,
        dataSearch: action.payload
      };
    }
    default:
      return state;
  }
};
