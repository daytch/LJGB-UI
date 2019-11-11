import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BoxItem extends Component {
  render() {
    const { image, price, name } = this.props;
    return (
      <div>
        <Link to="/">
          <div className="product__item">
            <div className="product__image__small">
              <img src={image} alt="" />
              {/* <p className="product__category">Lowest Ask</p> */}
            </div>
            <div className="product__caption">
              <p className="product__title">{name}</p>
              <p className="product__category">Lowest Ask</p>
              <p className="product__price">
                <span className="">Rp. {price}</span>
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default BoxItem;
