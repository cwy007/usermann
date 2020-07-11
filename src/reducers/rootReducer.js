import { combineReducers } from 'redux';
import isLogin from './indexReducer';

var rootReducer = combineReducers({
  isLogin
});

export default rootReducer;
