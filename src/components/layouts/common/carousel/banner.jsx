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
        {layout.banner.map(function(url, index) {
          return (
            <Carousel.Item>
              <div className="">
                <div className="head__image">
                  <img
                    src={url}
                    //src="https://stockx-assets.imgix.net/Core/sneaker.png?auto=compress,format"
                    alt={'banner ' + (index + 1)}
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
