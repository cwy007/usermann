import React, { Component } from 'react';

class Login extends Component {

  constructor(props) {
    super(props);
    this.userLogin = this.userLogin.bind(this);
  }

  // this.refs.username.value
  // this.props.history
  userLogin() {
    this.props.LOGIN(this.refs.username.value, this.refs.password.value, this.props.history);
  }

  componentDidMount() {
    console.log('Login render complete.');
  }

  render() {
    return (
      <div>
        <h3>Login Page</h3>
        <div>
          Username: &nbsp;&nbsp;<input type="text" ref="username" />
        </div>
        <div>
          Password: &nbsp;&nbsp;<input type="password" ref="password" />
        </div>
        <div>
         <button onClick={this.userLogin}>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
