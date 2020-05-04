import { SET_DATA_ALL_MASTER, SET_DATA_BANNER } from '../constants/index';

const INIT_STATE = {
  isLoading: false,
  banner: {
    desktop: [],
    tablet: [],
    phone: [],
    current: []
  },
  contact: {
    socialMedia: {
      facebook: '',
      instagram: '',
      twitter: '',
      youtube: ''
    },
    contactCenter: ''
  }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_DATA_ALL_MASTER: {
      return {
        ...state,
        banner: action.payload.banner,
        contact: action.payload.contact
      };
    }
    case SET_DATA_BANNER: {
      return {
        ...state,
        banner: {
          ...state.banner,
          current: action.payload
        }
      };
    }
    default:
      return state;
  }
};
