// import 'core-js/es6/map';
// import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import App from './containers/App';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
