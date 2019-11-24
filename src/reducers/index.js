import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import homeReducer from './homeReducer';
import detailReducer from './detailReducer';
import transactionReducer from './transactionReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  loginReducer,
  homeReducer,
  detailReducer,
  transactionReducer,
  profileReducer
});

export default rootReducer;
