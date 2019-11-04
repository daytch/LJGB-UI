import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    localStorage.removeItem('idToken');
  }

  render() {
    var token = localStorage.getItem('idToken');
    if (token == null) {
      return (
        <Redirect
          to={{
            pathname: '/'
          }}
        />
      );
    }
    return (
      <main role="main">
        <div className="container"></div>
      </main>
    );
  }
}

export default Logout;
