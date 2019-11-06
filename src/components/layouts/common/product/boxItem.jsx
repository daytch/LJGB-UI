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
                src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/911-road-3629a.jpg?itok=m6x23Go0"
                alt=""
              />
              {/* <p className="product__category">Lowest Ask</p> */}
            </div>
            <div className="product__caption">
              <p className="product__title">CAR M5 GRAN TURISMO</p>
              <p className="product__category">Lowest Ask</p>
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
