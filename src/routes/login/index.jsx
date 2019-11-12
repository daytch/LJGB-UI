import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import ForgetPassword from './ForgetPassword';
import FormSignUp from './FormSignUp';
import LoginWith from './LoginWith';

import { connect } from 'react-redux';
import { actions } from '../../actions/loginAction';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignUpForm: false,
      isLoginForm: true,
      unSeen: true,
      forget: false,
      idToken: localStorage.getItem('idToken')
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.toggleType = this.toggleType.bind(this);
    this.handleForget = this.handleForget.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  toggleForm() {
    this.setState(prevState => ({
      isSignUpForm: !prevState.isSignUpForm,
      isLoginForm: !prevState.isLoginForm
    }));
  }

  onLogin() {
    let token = '1234567890';
    localStorage.setItem('idToken', token);
    this.setState({ idToken: token });
  }

  toggleType() {
    this.setState(prevState => ({
      unSeen: !prevState.unSeen
    }));
  }

  handleForget() {
    this.setState(prevState => ({
      forget: !prevState.forget
    }));
  }

  render() {
    var log = this.state;
    const { login, handleState } = this.props;
    return (
      <main role="main">
        <div className="container">
          <span
            className={
              log.forget === true ? 'backToLogin' : 'formLoginHide backToLogin'
            }
            onClick={this.handleForget}
          >
            Back to Log in / Sign up
          </span>

          <div className="formLoginWrapper">
            <div className={log.forget === true ? 'formLoginHide' : ''}>
              <div className="accessToggle">
                <span
                  onClick={this.toggleForm}
                  className={
                    log.isSignUpForm === true
                      ? 'accessToggle_option active'
                      : 'accessToggle_option'
                  }
                >
                  Sign Up
                </span>
                <span
                  onClick={this.toggleForm}
                  className={
                    log.isLoginForm === true
                      ? 'accessToggle_option active'
                      : 'accessToggle_option'
                  }
                >
                  Log In
                </span>
              </div>

              {/* s: Login form */}
              <div className={log.isLoginForm === true ? '' : 'formLoginHide'}>
                <LoginWith />

                <p className="linedText">
                  <span>OR</span>
                </p>

                <form>
                  <div className="field">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="email.address@domain.com"
                      value={login.name}
                      onChange={handleState.bind(this, 'name')}
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
                      <FontAwesomeIcon
                        icon={this.state.unSeen ? faEye : faEyeSlash}
                      />
                    </span>
                  </div>

                  <p
                    onClick={this.handleForget}
                    style={{
                      fontSize: '12px',
                      textAlign: 'right',
                      margin: '-10px 0 0',
                      color: '#337ab7',
                      cursor: 'pointer'
                    }}
                  >
                    Forgot Password?
                  </p>

                  <div className="checkGo">
                    <input
                      type="checkbox"
                      className="checkInput"
                      id="keepLogin"
                      name="keepLogin"
                    />
                    <label className="checkLabel" htmlFor="keepLogin">
                      Keep me logged in
                    </label>
                    <span className="checkmark"></span>
                  </div>

                  <button
                    className="btn btnGrey"
                    onClick={this.onLogin.bind(this)}
                  >
                    Log In
                  </button>

                  <p
                    style={{
                      fontSize: '12px',
                      textAlign: 'center',
                      margin: '10px 0 0'
                    }}
                  >
                    By Logging in, you agree to the{' '}
                    <a href="">Terms of Service</a> and{' '}
                    <a href="">Privacy Policy</a>
                  </p>
                </form>
              </div>
              {/* e: Login form */}

              {/* s: Sign up form */}
              <div className={log.isSignUpForm === true ? '' : 'formLoginHide'}>
                <FormSignUp />
              </div>
              {/* e: Sign up form */}
            </div>

            <div className={log.forget === true ? '' : 'formLoginHide'}>
              <ForgetPassword />
            </div>
          </div>
        </div>
      </main>
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
)(Login);
