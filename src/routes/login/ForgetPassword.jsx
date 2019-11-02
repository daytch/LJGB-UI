import React, { Component } from 'react';

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
          />
          <label htmlFor="email">Email address</label>
        </div>

        <button className="btn btnGrey">Reset Password</button>
      </div>
    );
  }
}

export default ForgetPassword;
