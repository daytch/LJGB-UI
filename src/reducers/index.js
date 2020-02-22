import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import homeReducer from './homeReducer';
import detailReducer from './detailReducer';
import transactionReducer from './transactionReducer';
import profileReducer from './profileReducer';
import layoutReducer from './layoutReducer';

const rootReducer = combineReducers({
  loginReducer,
  homeReducer,
  detailReducer,
  transactionReducer,
  profileReducer,
  layoutReducer
});

export default rootReducer;
