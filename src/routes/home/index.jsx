import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { actions } from '../../actions/homeAction';
import { Select, Tooltip } from 'antd';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faCoffee,
//   faCar,
//   faCaretRight,
//   faArrowRight,
//   faArrowCircleRight,
//   faCaretSquareRight
// } from '@fortawesome/free-solid-svg-icons';
import Selected from './../../components/globalComponents/customSelect';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

import Product from '../../components/layouts/common/product';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const { Option } = Select;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0
    };
  }

  componentWillMount() {
    localStorage.removeItem('city');
    localStorage.removeItem('brand');
    localStorage.removeItem('model');
    localStorage.removeItem('type');

    this.props.getDataHome();
    this.props.getDataKota();

    $('.navbar').addClass('navbar-dark');
    $('.navbar').removeClass('bg-cl-white');
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
    this.setState({
      scrollY: window.scrollY
    });

    if (this.state.scrollY > 150) {
      $('.navbar').removeClass('navbar-dark');
      $('.navbar').addClass('bg-cl-white');
    } else {
      $('.navbar').addClass('navbar-dark');
      $('.navbar').removeClass('bg-cl-white');
    }
  };

  setVar(data) {
    if (data.city !== '') {
      localStorage.setItem('city', data.city);
    }
    if (data.brand !== '') {
      localStorage.setItem('brand', data.brand);
    }
    if (data.model !== '') {
      localStorage.setItem('model', data.model);
    }
    if (data.type !== '') {
      localStorage.setItem('type', data.type);
    }
  }

  render() {
    const {
      home,
      handleChange,
      getDataBrand,
      getDataModel,
      getDataType
    } = this.props;

    let form = 'search';
    return (
      <BlockUi
        tag="div"
        blocking={home.isLoadingHome}
        style={{ width: '100%' }}
      >
        <main role="main" style={{ marginTop: '0' }}>
          <div className="slider__top">
            <Carousel fade="true">
              <Carousel.Item>
                <div className="">
                  <div className="head__image">
                    <img
                      src="https://www.kudosprime.com/gt6/images/users/car_87_28880_54c90a2e8a721.jpg"
                      alt=""
                      className=""
                    />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="">
                  <div className="head__image">
                    <img
                      src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/911-road-3629a.jpg?itok=m6x23Go0"
                      alt=""
                      className=""
                    />
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>

            <div className="search">
              <div className="container">
                <div className="select__wrapper">
                  <div className="row">
                    <div className="col-6 col-md">
                      <span className="search__label">Wilayah</span>
                      <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select Wilayah"
                        optionFilterProp="children"
                        value={home.search.city}
                        onChange={event => {
                          let name = 'city';
                          let nameKota;
                          home.dataKota.map((x, index) => {
                            let name = 'brand';
                            if (x.id == event) {
                              nameKota = x.text;
                            }
                          });
                          handleChange(form, name, event);
                          handleChange(form, 'cityText', nameKota);
                          getDataBrand(form, name, event);
                        }}
                        filterOption={(input, option) =>
                          option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {(home.dataKota !== undefined ? home.dataKota : []).map(
                          (x, index) => {
                            return (
                              <Option key={index} value={x.id}>
                                {x.text}
                              </Option>
                            );
                          }
                        )}
                      </Select>
                    </div>

                    <div className="col-6 col-md">
                      <span className="search__label">Brand</span>
                      <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select Brand"
                        optionFilterProp="children"
                        value={home.search.brand}
                        onChange={event => {
                          let name = 'brand';
                          handleChange(form, name, event);
                          getDataModel(form, name, event);
                        }}
                        filterOption={(input, option) =>
                          option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {(home.dataBrand !== undefined
                          ? home.dataBrand
                          : []
                        ).map((x, index) => {
                          return (
                            <Option key={index} value={x.id}>
                              {x.text}
                            </Option>
                          );
                        })}
                      </Select>
                    </div>

                    <div className="col-6 col-md">
                      <span className="search__label">Model</span>
                      <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select Model"
                        optionFilterProp="children"
                        value={home.search.model}
                        onChange={event => {
                          let name = 'model';
                          handleChange(form, name, event);
                          getDataType(form, name, event);
                        }}
                        filterOption={(input, option) =>
                          option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {(home.dataModel !== undefined
                          ? home.dataModel
                          : []
                        ).map((x, index) => {
                          return (
                            <Option key={index} value={x.id}>
                              {x.text}
                            </Option>
                          );
                        })}
                      </Select>
                    </div>

                    <div className="col-6 col-md">
                      <span className="search__label">Tipe</span>
                      <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select Tipe"
                        optionFilterProp="children"
                        value={home.search.type}
                        onChange={event => {
                          let name = 'type';
                          handleChange(form, name, event);
                        }}
                        filterOption={(input, option) =>
                          option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {(home.dataType !== undefined ? home.dataType : []).map(
                          (x, index) => {
                            return (
                              <Option key={index} value={x.id}>
                                {x.text}
                              </Option>
                            );
                          }
                        )}
                      </Select>
                    </div>
                    <div className="col-md-12 col-md">
                      <div className="btn-center" style={{ marginTop: '15px' }}>
                        <Link to="/search">
                          <button
                            className="btn btn-success"
                            onClick={this.setVar.bind(this, home.search)}
                          >
                            Search
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="container">
              <div className="product">
                <div className="row__header">
                  <span className="product__category-big">
                    <Tooltip
                      placement="right"
                      title="Lowest ask are the products listed width the lowest ask"
                    >
                      Lowest Ask
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="product__info"
                      />
                    </Tooltip>
                  </span>
                  <Link className="see__all">See all </Link>
                </div>
                <Product data={home.dataHome.lowestAsks} title={'Lowest Ask'} />
              </div>

              <div className="product">
                <div className="row__header">
                  <span className="product__category-big">
                    <Tooltip
                      placement="right"
                      title="Highest Bid are the products listed width the highest Bid"
                    >
                      Highest Bid
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="product__info"
                      />
                    </Tooltip>
                  </span>
                  <Link className="see__all">See all </Link>
                </div>
                <Product
                  data={home.dataHome.highestBids}
                  title={'Highest Bid'}
                />
              </div>

              <div className="product">
                <div className="row__header">
                  <span className="product__category-big">
                    <Tooltip placement="right" title="All products">
                      Other
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="product__info"
                      />
                    </Tooltip>
                  </span>
                  <Link className="see__all">See all </Link>
                </div>
                <Product data={home.dataHome.listNormal} title={'Other'} />
                {/* <Product
                data={home.dataHome.highestBids} /> /> */}
              </div>

              <div className="pilihLjgb">
                <h4>Kenapa pilih mobil baru di Lojualguebeli.com?</h4>

                <div className="pilihLjgb__wrapper">
                  <div className="pilihLjgb__item">
                    <div className="pilihLjgb__item__img">
                      <img
                        src="https://www.rajamobil.com/themes/rmperjuangan/images/new-home/lengkap.svg"
                        alt=""
                      />
                    </div>
                    <div className="pilihLjgb__item__caption">
                      <p>
                        Lojualguebeli.com Pertama di indonesia yang menawarkan
                        feature BID & Ask. Dengan > 7000 dealer dari berbagai
                        brand.
                      </p>
                    </div>
                  </div>

                  <div className="pilihLjgb__item">
                    <div className="pilihLjgb__item__img">
                      <img
                        src="https://www.rajamobil.com/themes/rmperjuangan/images/new-home/promo-harga-bersaing.svg"
                        alt=""
                      />
                    </div>
                    <div className="pilihLjgb__item__caption">
                      <p>
                        7000+ Wiraniaga yang siap membantu melayani pelanggan.
                        Semua sales resmi dari authorized dealer dengan didukung
                        sistem yang terintegrasi
                      </p>
                    </div>
                  </div>

                  <div className="pilihLjgb__item">
                    <div className="pilihLjgb__item__img">
                      <img
                        src="https://www.rajamobil.com/themes/rmperjuangan/images/new-home/aman-terpecaya.svg"
                        alt=""
                      />
                    </div>
                    <div className="pilihLjgb__item__caption">
                      <p>
                        Kemudahan untuk mendapatkan harga terbaik tanpa ribet
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </BlockUi>
    );
  }
}

const mapStateToProps = state => ({
  home: state.homeReducer
});
export default connect(
  mapStateToProps,
  {
    ...actions
  }
)(Home);
