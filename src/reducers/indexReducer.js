import { UserMannType } from '../actions';


var isLogin = false;

function indexReducer(state = isLogin, action) {
  switch (action.type) {
    case UserMannType.LOG_IN:
      return true;
    case UserMannType.LOG_OUT:
      return false;
    default:
      return false;
  }
}

export default indexReducer;
