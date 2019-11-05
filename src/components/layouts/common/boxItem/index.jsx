import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BoxItem extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <div className="product__item">
            <div className="product__image__small">
              <img
                src="https://www.kudosprime.com/gt6/images/users/car_87_28880_54c90a2e8a721.jpg"
                alt=""
              />
            </div>
            <div className="product__caption">
              <p className="product__category">Lowest Ask</p>
              <p className="product__title">AUTO 330e iPERFORMANCE</p>
              <p className="product__price">
                <span className="">Rp.100</span>
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default BoxItem;
