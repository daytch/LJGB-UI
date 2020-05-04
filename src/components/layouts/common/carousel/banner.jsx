import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { actions } from '../../../../actions/layoutAction';

class Banner extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  handleResize = () => {
    if (window.innerWidth >= '992') {
      this.props.setDataBanner(this.props.layout.banner.desktop);
    } else if (window.innerWidth >= '768') {
      this.props.setDataBanner(this.props.layout.banner.tablet);
    } else {
      this.props.setDataBanner(this.props.layout.banner.phone);
    }
  };
  render() {
    const { layout } = this.props;
    return (
      <Carousel fade="true">
        {layout.banner.current.map(function(obj, index) {
          return (
            <Carousel.Item>
              <div className="">
                <div className="head__image">
                  <picture>
                    <img
                      src={encodeURI(obj).replace('#', '%23')}
                      alt={'banner ' + (index + 1)}
                      title="Lojualguebeli.com"
                    />
                  </picture>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}

const mapStateToProps = state => ({
  layout: state.layoutReducer
});
export default connect(mapStateToProps, { ...actions })(Banner);
