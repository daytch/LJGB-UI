import React, { Component } from 'react';

class ProfileContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>Profile</h3>
        <div className="profile__detail">
          <span>Name</span>
          <span>Novia Venessa</span>
        </div>
        <div className="profile__detail">
          <span>Email</span>
          <span>noviavenessa@gmail.com</span>
        </div>
        <div className="profile__detail">
          <span>Phone</span>
          <span>0812 9999 9999</span>
        </div>
      </div>
    );
  }
}

export default ProfileContent;
