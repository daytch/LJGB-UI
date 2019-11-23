import React, { Component } from 'react';
import { Layout, Menu, Icon, Form } from 'antd';
import ProfileContent from './profileContent';
import Tracking from './tracking';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: true,
      tracking: false
    };
    this.handleProfile = this.handleProfile.bind(this);
    this.handleTracking = this.handleTracking.bind(this);
  }
  handleProfile() {
    this.setState({
      profile: true,
      tracking: false
    });
  }
  handleTracking() {
    this.setState({
      profile: false,
      tracking: true
    });
  }
  render() {
    const { Header, Content, Footer, Sider } = Layout;
    // const dis = this.state;
    return (
      <main role="main">
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0
          }}
        >
          <div className="profile__header">
            <div className="profile__picture">
              <img
                src="https://www.ayobogor.com/images-bogor/post/articles/2019/08/29/4131/66100743_467711664065817_4828107924256841603_n.jpg"
                alt=""
              />
            </div>
            <h3 className="profile__name">Novia Venessa</h3>
          </div>
          <Menu mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" onClick={this.handleProfile}>
              <Icon type="user" />
              <span className="nav-text">Profile</span>
            </Menu.Item>
            <Menu.Item key="2" onClick={this.handleTracking}>
              <Icon type="car" />
              <span className="nav-text">Tracking</span>
            </Menu.Item>
          </Menu>
        </Sider>

        <div className="profile__content">
          <div className="container pd-t-30">
            {this.state.profile == true ? <ProfileContent /> : <Tracking />}
          </div>
        </div>
      </main>
    );
  }
}

export default Profile;
