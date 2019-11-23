import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import homeReducer from './homeReducer';
import detailReducer from './detailReducer';
import transactionReducer from './transactionReducer';

const rootReducer = combineReducers({
  loginReducer,
  homeReducer,
  detailReducer,
  transactionReducer
});

export default rootReducer;
