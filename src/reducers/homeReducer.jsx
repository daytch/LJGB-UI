import { SET_DATA_HOME, SET_LOADER_HOME } from '../constants/index';

const INIT_STATE = {
  isLoading: false,
  dataHome: {
    lowestAsks: [],
    highestBids: [],
    listNormal: [],
    carDetail: '',
    relatedProducts: '',
    listAsks: ''
  }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_DATA_HOME: {
      debugger;
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
    default:
      return state;
  }
};
