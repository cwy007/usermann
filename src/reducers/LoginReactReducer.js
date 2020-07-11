import { connect } from 'react-redux';
import Login from '../components/login/Login';
import { UserMannType } from '../actions';

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    LOGIN: function(username, password, history) {
      console.log("username: " + username);
      console.log("password: " + password);
      setTimeout(function() {
        dispatch({type: UserMannType.LOG_IN});
        history.push({pathname: '/Home'}); // 页面跳转
      }, 1000);
    }
  };
}

var LoginReactReducer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginReactReducer;
