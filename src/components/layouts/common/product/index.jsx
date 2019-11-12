import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BoxItem from './boxItem';

class Product extends Component {
  renderUi(data) {
    return data.map((x, i) => {
      return (
        <div className="col-6 col-md">
          <BoxItem image={x.image} name={x.name} price={x.price} />
        </div>
      );
    });
  }
  render() {
    const { data } = this.props;
    return (
      <div className="product__wrapper">
        <div className="row">
          {data !== undefined ? this.renderUi(data) : null
          // <div>
          //   <div className="col-6 col-md">
          //     <BoxItem
          //       data={data}
          //     />
          //   </div>

          //   <div className="col-6 col-md">
          //     <BoxItem />
          //   </div>

          //   <div className="col-6 col-md">
          //     <BoxItem />
          //   </div>

          //   <div className="col-6 col-md">
          //     <BoxItem />
          //   </div>

          //   <div className="col-6 col-md">
          //     <BoxItem />
          //   </div>
          // </div>
          }
          {/* <div className="col-6 col-md">
            <BoxItem
              data={data}
            />
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
          </div> */}
        </div>
      </div>
    );
  }
}

export default Product;
