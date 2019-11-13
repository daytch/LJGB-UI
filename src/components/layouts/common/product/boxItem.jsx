import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BoxItem extends Component {
  numberWithCommas(x) {
    let str = x.toString();
    if (str.length === 9 || str.length === 8) {
      str = str.substring(0, str.length - 6);
      return str + ' JT';
    } else if (str.length >= 10) {
      str = str.substring(0, str.length - 9);
      return str + ' M';
    } else {
      return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }

  render() {
    const { image, price, name, title } = this.props;
    return (
      <div>
        <Link to="/detail">
          <div className="product__item">
            <div className="product__image__small">
              <img src={image} alt="" />
              {/* <p className="product__category">Lowest Ask</p> */}
            </div>
            <div className="product__caption">
              <p className="product__title">{name}</p>
              <p className="product__category">{title}</p>
              <p className="product__price">
                <span className="">Rp. {this.numberWithCommas(price)}</span>
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default BoxItem;
