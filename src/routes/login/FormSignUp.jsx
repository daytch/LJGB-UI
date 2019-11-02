import React, { Component } from 'react';
import LoginWith from './LoginWith';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

class FormSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unSeen: true
    };
    this.toggleType = this.toggleType.bind(this);
  }

  toggleType() {
    this.setState(prevState => ({
      unSeen: !prevState.unSeen
    }));
  }
  render() {
    return (
      <div>
        <LoginWith />
        <p className="linedText">
          <span>OR</span>
        </p>
        <form>
          <div className="field">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="field">
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className="field">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="email.address@domain.com"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="field">
            <input
              type={this.state.unSeen ? 'password' : 'text'}
              name="password"
              id="password"
              placeholder="Password"
              className="text-pass"
            />
            <label htmlFor="password">Password</label>
            <span className="iconEye" onClick={this.toggleType}>
              <FontAwesomeIcon icon={this.state.unSeen ? faEye : faEyeSlash} />
            </span>
          </div>
          <div className="checkGo">
            <input
              type="checkbox"
              className="checkInput"
              id="agree"
              name="agree"
            />
            <label className="checkLabel" htmlFor="agree">
              By signing up, you agree to the <a href="">Terms of Service</a>{' '}
              and <a href="">Privacy Policy</a>
            </label>
            <span className="checkmark"></span>
          </div>
          <button className="btn btnGrey">Log In</button>
        </form>
      </div>
    );
  }
}

export default FormSignUp;
