import React, { Component } from 'react';
import Header from './layouts/common/headers';
import Footer from './layouts/common/footers';
import { actions } from '../actions/layoutAction';
import { connect } from 'react-redux';

class App extends Component {
  componentWillMount() {
    this.props.getDataAllMaster();
  }
  render() {
    return (
      <>
        <Header />
        <div style={{ minHeight: 'calc(100vh - 62px)' }}>
          {this.props.children}
        </div>
        <Footer />
      </>
    );
  }
}

export default connect(null, {
  ...actions
})(App);
