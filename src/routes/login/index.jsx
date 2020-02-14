import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import ForgetPassword from './ForgetPassword';
import FormSignUp from './FormSignUp';
import LoginWith from './LoginWith';
import BlockUi from 'react-block-ui';
import { Loader, Types } from 'react-loaders';

import { connect } from 'react-redux';
import { actions } from '../../actions/loginAction';
// import { GoogleLogin } from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';

// const responseFacebook = response => {
//   console.log(response);
// };

// const responseGoogle = response => {
//   console.log(response);
// };

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

  componentWillMount() {
    // $('.navbar').removeClass('navbar-dark');
    // $('.navbar').addClass('bg-cl-white');
    // $('#logoWhite').css({ display: 'none' });
    // $('#logoDark').css({ display: 'block' });
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
    const { login, handleState, getLogin } = this.props;

    const formLogin = {
      height: 'calc(100vh - 70px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingTop: '10vh'
    };

    return (
      <BlockUi
        tag="div"
        blocking={login.isLoading}
        style={{ width: '100%' }}
        message={<h3>Loading, please wait</h3>}
        loader={<Loader active type="ball-pulse-sync" color="#061b56" />}
      >
        <main role="main" style={{ backgroundColor: '#fafafa' }}>
          <div className="container" style={formLogin}>
            <span
              className={
                log.forget === true
                  ? 'backToLogin'
                  : 'formLoginHide backToLogin'
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
                <div
                  className={log.isLoginForm === true ? '' : 'formLoginHide'}
                >
                  {/* <LoginWith /> */}
                  {/* <GoogleLogin
                  clientId="206275678690-iia8vnbt1sep36v2tiebqmqs1i5uu4h1.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                /> */}
                  {/* <FacebookLogin
                  appId="1088597931155576"
                  autoLoad={true}
                  fields="name,email,picture"
                  onClick={responseFacebook}
                  callback={responseFacebook} /> */}

                  {/* <p className="linedText">
                  <span>OR</span>
                </p> */}

                  {/* <form> */}
                  <div className="field">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="email.address@domain.com"
                      value={login.nameLogin}
                      onChange={handleState.bind(this, 'nameLogin')}
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
                      value={login.passwordLogin}
                      onChange={handleState.bind(this, 'passwordLogin')}
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
                      margin: '-10px 23px 10px 0',
                      color: '#337ab7',
                      cursor: 'pointer'
                    }}
                  >
                    Forgot Password?
                  </p>

                  {/* <div className="checkGo">
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
                  </div> */}

                  <button
                    className="btn btn-primary"
                    onClick={getLogin.bind(this)}
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
                  {/* </form> */}
                </div>
                {/* e: Login form */}

                {/* s: Sign up form */}
                <div
                  className={log.isSignUpForm === true ? '' : 'formLoginHide'}
                >
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
      </BlockUi>
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
