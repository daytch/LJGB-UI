import React, { Component } from 'react';
import LoginWith from './LoginWith';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { actions } from '../../actions/loginAction';

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
    const { login, handleState, getSignUp } = this.props;
    return (
      <div>
        {/* <LoginWith />
        <p className="linedText">
          <span>OR</span>
        </p> */}
        {/* <form> */}
        <div className="field">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            value={login.firstName}
            onChange={handleState.bind(this, 'firstName')}
          />
          <label htmlFor="firstName">First Name</label>
        </div>
        <div className="field">
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={login.lastName}
            onChange={handleState.bind(this, 'lastName')}
          />
          <label htmlFor="lastName">Last Name</label>
        </div>
        <div className="field">
          <input
            type="text"
            name="noHp"
            id="noHp"
            placeholder="Nomor Handphone"
            value={login.noHp}
            onChange={handleState.bind(this, 'noHp')}
          />
          <label htmlFor="noHp">Nomor Handphone</label>
        </div>
        <div className="field">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email.address@domain.com"
            value={login.email}
            onChange={handleState.bind(this, 'email')}
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
            value={login.password}
            onChange={handleState.bind(this, 'password')}
          />
          <label htmlFor="password">Password</label>
          <span className="iconEye" onClick={this.toggleType}>
            <FontAwesomeIcon icon={this.state.unSeen ? faEye : faEyeSlash} />
          </span>
        </div>
        {/* <div className="checkGo">
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
          </div> */}
        <button className="btn btn-primary" onClick={getSignUp.bind(this)}>
          Sign Up
        </button>
        {/* </form> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: state.loginReducer
});
export default connect(
  mapStateToProps,
  {
    ...actions
  }
)(FormSignUp);
