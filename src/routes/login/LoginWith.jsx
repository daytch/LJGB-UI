import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

class LoginWith extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="loginWith">
        <button className="btn btnFb">
          <FontAwesomeIcon icon={faEye} />
          <span>Facebook</span>
        </button>
        <button className="btn btnTw">
          <FontAwesomeIcon icon={faEyeSlash} />
          <span>Twitter</span>
        </button>
      </div>
    );
  }
}

export default LoginWith;
