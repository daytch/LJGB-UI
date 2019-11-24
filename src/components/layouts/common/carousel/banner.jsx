import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Carousel fade="true">
        <Carousel.Item>
          <div className="">
            <div className="head__image">
              <img
                src="https://www.toyotajogjadealer.com/wp-content/uploads/2017/07/490.jpg"
                alt="banner 1"
                title="Lojualguebeli.com"
              />
            </div>
            <div className="slider__caption">
              <div className="container">
                <div className="txt1">
                  <span>FIND YOUR DREAM CAR</span>
                </div>
                <div className="txt2">NEW ALPHARD </div>
                <div className="txt3">2.5 G A/T</div>
                <div className="txt4">
                  <span>
                    <Link to="/detail">SEE DETAILS</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="">
            <div className="head__image">
              <img
                src="https://images.seva.id/sys-master/images/hff/hf1/8814513717278/main_galery_toyota_new_alphard_interior_1.png"
                alt="banner 2"
                title="Lojualguebeli.com"
              />
            </div>
            <div className="slider__caption">
              <div className="container">
                <div className="txt1">
                  <span>FIND YOUR DREAM CAR</span>
                </div>
                <div className="txt2">NEW ALPHARD </div>
                <div className="txt3">2.5 G A/T</div>
                <div className="txt4">
                  <span>
                    <Link to="/detail">SEE DETAILS</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Banner;
