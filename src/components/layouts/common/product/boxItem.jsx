import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BoxItem extends Component {
  numberWithCommas(x) {
    let str = x === null || x === '' ? '' : x.toString();
    if (str !== '' && str.length > 9) {
      str = str.substring(0, str.length - 6);
      let get2 = str.substring(1, 4);
      let get1 = str.substring(0, 1);
      if (get2.substring(0, 1) == 0) {
        get2 = get2.substring(1, 4);
      }
      if (get2.substring(0, 1) == 0) {
        get2 = get2.substring(1, 4);
      }
      let get3 = get2 == 0 ? '' : get2 + ' JT';
      str = str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      return get1 + ' M ' + get3;
    } else if (str !== '' && str.length >= 7) {
      str = str.substring(0, str.length - 6);
      str = str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      return str + ' JT';
    } else {
      return '';
    }

    // let str = x.toString();
    // // if (str.length === 9 || str.length === 8) {
    // str = str.substring(0, str.length - 6);
    // str = str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    // return str + ' JT';
    // // } else if (str.length >= 10) {
    // //   str = str.substring(0, str.length - 9);
    // //   return str + ' M';
    // // } else {
    // //   return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // // }
  }

  render() {
    const { image, price, name, title, id } = this.props;
    return (
      <div>
        <Link to={'/detail?id=' + id}>
          <div className="product__item">
            <div className="product__image__small">
              <img src={image} alt="" title="Lojualguebeli.com" />
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
