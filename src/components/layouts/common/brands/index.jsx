import React, { Component } from 'react';
import Slider from 'react-slick';
import logo1 from '../../../../images/brand/brand-daihatsu.png';
import logo2 from '../../../../images/brand/brand-honda.png';
import logo3 from '../../../../images/brand/brand-isuzu.png';
import logo4 from '../../../../images/brand/brand-mitsubishi.png';
import logo5 from '../../../../images/brand/brand-nissan.png';
import logo6 from '../../../../images/brand/brand-suzuki.png';
import logo7 from '../../../../images/brand/brand-toyota.jpg';

class Brands extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };
    const styleWrapper = {
      width: '100%',
      height: '50px',
      position: 'relative'
    };
    const styleImg = {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      objectPosition: 'center'
    };
    return (
      <Slider {...settings}>
        <div>
          <div style={styleWrapper}>
            <img src={logo1} style={styleImg} alt="" />
          </div>
        </div>
        <div>
          <div style={styleWrapper}>
            <img src={logo2} style={styleImg} alt="" />
          </div>
        </div>
        <div>
          <div style={styleWrapper}>
            <img src={logo3} style={styleImg} alt="" />
          </div>
        </div>
        <div>
          <div style={styleWrapper}>
            <img src={logo4} style={styleImg} alt="" />
          </div>
        </div>
        <div>
          <div style={styleWrapper}>
            <img src={logo5} style={styleImg} alt="" />
          </div>
        </div>
      </Slider>
    );
  }
}

export default Brands;
