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

class ActivateAcc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignUpForm: false,
      isLoginForm: true,
      unSeen: true,
      forget: false,
      idToken: localStorage.getItem('idToken'),
      tokenChange: ''
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.toggleType = this.toggleType.bind(this);
    this.handleForget = this.handleForget.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  componentWillMount() {
    let getToken = this.props.location.search.replace('?token=', '');
    this.setState(prevState => ({
      tokenChange: getToken
    }));
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
    const { login, handleState, getActivateAcc } = this.props;

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
            <div className="formLoginWrapper">
              <div>
                <p style={{ textAlign: 'center', fontSize: '1.3em' }}>
                  Activate Account
                </p>

                <p style={{ textAlign: 'center', margin: '20px 0' }}>
                  Press the button to activate your account
                </p>

                <button
                  className="btn btn-primary"
                  onClick={getActivateAcc.bind(this, this.state.tokenChange)}
                >
                  Activate Account
                </button>
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
)(ActivateAcc);
