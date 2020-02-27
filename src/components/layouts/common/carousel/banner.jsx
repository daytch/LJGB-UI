import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { layout } = this.props;
    return (
      <Carousel fade="true">
        {layout.banner.map(function(obj, index) {
          return (
            <Carousel.Item>
              <div className="">
                <div className="head__image">
                  <picture>
                    <source
                      media="(min-width: 992px)"
                      srcSet={encodeURI(obj.banner)}
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet={encodeURI(obj.tablet)}
                    />
                    <img
                      src={encodeURI(obj.phone)}
                      alt={'banner ' + (index + 1)}
                      title="Lojualguebeli.com"
                    />
                  </picture>
                  {/* <img
                  srcSet={encodeURI(obj.banner) + " 992w, " + encodeURI(obj.tablet) + " 768w, " + encodeURI(obj.phone) + " 480w"}
                  sizes={"(min-width: 992px) 992px, (min-width: 768px) 768px, 480px"}
                    // srcset={"http://192.168.1.9:3000/first_180x.jpg 180w, http://192.168.1.9:3000/first_360x.jpg 360w, http://192.168.1.9:3000/first_540x.jpg 540w, http://192.168.1.9:3000/first_720x.jpg 720w, http://192.168.1.9:3000/first_900x.jpg 900w, http://192.168.1.9:3000/first_1080x.jpg 1080w, http://192.168.1.9:3000/first_1296x.jpg 1296w"}
                    //src="https://stockx-assets.imgix.net/Core/sneaker.png?auto=compress,format"
                    alt={'banner ' + (index + 1)}
                    title="Lojualguebeli.com"
                  /> */}
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
export default connect(mapStateToProps)(Banner);
