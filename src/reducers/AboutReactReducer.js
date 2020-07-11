import { connect } from 'react-redux';
import About from '../components/home/About';

function mapStateToProps(state) {
  return {
    isLogin: state.isLogin
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

var AboutReactReducer = connect(
  mapStateToProps,
  mapDispatchToProps
)(About);

export default AboutReactReducer;
