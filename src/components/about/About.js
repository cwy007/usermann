import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class About extends Component {
  constructor(props) {
    super(props);
    this.userLogout = this.userLogout.bind(this);
  }

  userLogout() {
    this.props.LOGOUT(this.props.history);
  }

  componentDidMount() {
    console.log('About render complete.');
  }

  render() {
    if (this.props.isLogin === false) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <div>
          <button onClick={this.userLogout}>Logout</button>
        </div>
        <div>
          <h3>About</h3>
          <p>Hi, this is about page.</p>
        </div>
      </div>
    );
  }
}

export default About;
