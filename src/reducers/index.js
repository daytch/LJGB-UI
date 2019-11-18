import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import homeReducer from './homeReducer';
import detailReducer from './detailReducer';

const rootReducer = combineReducers({
  loginReducer,
  homeReducer,
  detailReducer
});

export default rootReducer;
