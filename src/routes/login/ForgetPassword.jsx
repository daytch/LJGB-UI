import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../actions/loginAction';

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { login, handleState, getForgot } = this.props;
    return (
      <div>
        <p style={{ textAlign: 'center', fontSize: '1.3em' }}>Reset Password</p>

        <p style={{ textAlign: 'center', margin: '20px 0' }}>
          Please enter the email address that is associated with your account.
        </p>

        <div className="field">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email.address@domain.com"
            value={login.emailForgot}
            onChange={handleState.bind(this, 'emailForgot')}
          />
          <label htmlFor="email">Email address</label>
        </div>

        <button className="btn btn-primary" onClick={getForgot.bind(this)}>
          Reset Password
        </button>
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
)(ForgetPassword);
