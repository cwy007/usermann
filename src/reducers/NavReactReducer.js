import { connect } from 'react-redux';
import Nav from '../components/nav/Nav';

function mapStateToProps(state) {
  return {
    isLogin: state.isLogin
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

var NavReactReducer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);

export default NavReactReducer;
