import { SET_DATA_ALL_MASTER } from '../constants/index';

const INIT_STATE = {
  isLoading: false,
  banner: [],
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
    default:
      return state;
  }
};
