import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../actions/profileAction';

class ProfileContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.getDataProfile();
  }
  render() {
    const { profile } = this.props;
    return (
      <div>
        <h3>Profile</h3>
        <div className="profile__detail">
          <span>Name</span>
          <span>{profile.data.name}</span>
        </div>
        <div className="profile__detail">
          <span>Email</span>
          <span>{profile.data.email}</span>
        </div>
        <div className="profile__detail">
          <span>Phone</span>
          <span>{profile.data.telp}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profileReducer
});
export default connect(
  mapStateToProps,
  {
    ...actions
  }
)(ProfileContent);
