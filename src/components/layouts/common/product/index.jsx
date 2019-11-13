import React, { Component } from 'react';
import BoxItem from './boxItem';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import { connect } from 'react-redux';

class Product extends Component {
  renderUi(data, title) {
    const { home } = this.props;
    return data.map((x, i) => {
      return (
        <BlockUi
          tag="div"
          blocking={home.isLoading}
          style={{ width: '100%' }}
          className="col-3"
        >
          {/* <div className="col-3"> */}
          <BoxItem
            image={x.image}
            name={x.name}
            price={x.price}
            title={title}
          />
          {/* </div> */}
        </BlockUi>
      );
    });
  }
  render() {
    const { data, title } = this.props;
    return (
      <div className="product__wrapper">
        <div className="row">
          {data !== undefined ? this.renderUi(data, title) : null
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

const mapStateToProps = state => ({
  home: state.homeReducer
});
export default connect(mapStateToProps)(Product);
// export default Product;
