import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BoxItem from './boxItem';

class Product extends Component {
  render() {
    return (
      <div className="product__wrapper">
        <div className="row">
          <div className="col-6 col-md">
            <BoxItem />
          </div>

          <div className="col-6 col-md">
            <BoxItem />
          </div>

          <div className="col-6 col-md">
            <BoxItem />
          </div>

          <div className="col-6 col-md">
            <BoxItem />
          </div>

          <div className="col-6 col-md">
            <BoxItem />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
