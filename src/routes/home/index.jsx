import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../../actions/homeAction';
import { Select, Tooltip, Modal } from 'antd';
import BlockUi from 'react-block-ui';
import { Loader, Types } from 'react-loaders';

import Product from '../../components/layouts/common/product';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
// import ImageLogo from './../../images/ljgb.png';
import Banner from '../../components/layouts/common/carousel/banner';
import Brands from '../../components/layouts/common/brands';

import img1 from '../../images/img/img1.svg';
import img2 from '../../images/img/img2.svg';
import img3 from '../../images/img/img3.svg';

const { Option } = Select;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0,
      visible: false
    };
    this.showModal = this.showModal.bind(this);
  }

  componentWillMount() {
    localStorage.removeItem('city');
    localStorage.removeItem('brand');
    localStorage.removeItem('model');
    localStorage.removeItem('type');

    // this.props.getDataProvinsi();
    this.props.getDataHome();
    this.props.getDataKota();

    $('.navbar').addClass('navbar-dark');
    $('.navbar').removeClass('bg-cl-white');
    $('#logoWhite').css({ display: 'block' });
    $('#logoDark').css({ display: 'none' });

    // this.showModal()
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    $('.navbar').removeClass('navbar-dark');
    $('.navbar').addClass('bg-cl-white');
    $('#logoWhite').css({ display: 'none' });
    $('#logoDark').css({ display: 'block' });
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
    this.setState({
      scrollY: window.scrollY
    });

    if (this.state.scrollY > 150) {
      $('.navbar').removeClass('navbar-dark');
      $('.navbar').addClass('bg-cl-white');
      $('#logoWhite').css({ display: 'none' });
      $('#logoDark').css({ display: 'block' });
    } else {
      $('#logoWhite').css({ display: 'block' });
      $('#logoDark').css({ display: 'none' });
      $('.navbar').addClass('navbar-dark');
      $('.navbar').removeClass('bg-cl-white');
    }
  };

  setVar(data) {
    if (data.city !== undefined) {
      localStorage.setItem('city', data.city);
    }
    if (data.brand !== undefined) {
      localStorage.setItem('brand', data.brand);
    }
    if (data.model !== undefined) {
      localStorage.setItem('model', data.model);
    }
    if (data.type !== undefined) {
      localStorage.setItem('type', data.type);
    }
    this.props.handleChange('search', 'city', []);
    this.props.handleChange('search', 'brand', []);
    this.props.handleChange('search', 'model', []);
    this.props.handleChange('search', 'type', []);
    if (data.type.length == 0) {
      window.location.href = '/search';
    } else {
      this.props.getSearch();
    }
  }

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

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
        blocking={home.isLoading}
        style={{ width: '100%' }}
        message={<h3>Loading, please wait</h3>}
        loader={<Loader active type="ball-pulse-sync" color="#061b56" />}
      >
        <main role="main" style={{ marginTop: '0' }}>
          <div className="slider__top">
            <Banner />

            <div className="search">
              <div className="container">
                <div className="select__wrapper">
                  <div className="row">
                    <div className="col-6 col-md">
                      <span className="search__label">Wilayah</span>
                      <Select
                        showSearch
                        allowClear={true}
                        style={{ width: 200 }}
                        placeholder="Select Wilayah"
                        optionFilterProp="children"
                        value={home.search.city}
                        onChange={event => {
                          let name = 'city';
                          let nameKota;
                          home.dataKota.map((x, index) => {
                            // let name = 'brand';
                            if (x.id === event) {
                              nameKota = x.text;
                            }
                          });
                          handleChange(form, name, event);
                          handleChange(form, 'cityText', nameKota);
                          if (event !== undefined) {
                            getDataBrand(form, name, event);
                          }
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
                        allowClear={true}
                        style={{ width: 200 }}
                        placeholder="Select Brand"
                        optionFilterProp="children"
                        value={home.search.brand}
                        onChange={event => {
                          let name = 'brand';
                          handleChange(form, name, event);
                          if (event !== undefined) {
                            getDataModel(form, name, event);
                          }
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
                        allowClear={true}
                        style={{ width: 200 }}
                        placeholder="Select Model"
                        optionFilterProp="children"
                        value={home.search.model}
                        onChange={event => {
                          let name = 'model';
                          handleChange(form, name, event);
                          if (event !== undefined) {
                            getDataType(form, name, event);
                          }
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
                        allowClear={true}
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
                        {/* <Link to={home.search.type.length == 0 ? "/search" : "/detail"}> */}
                        <button
                          className="btn btn-success"
                          onClick={this.setVar.bind(this, home.search)}
                        >
                          Search
                        </button>
                        {/* </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <BlockUi
            tag="div"
            blocking={home.isLoadingHome}
            style={{ width: '100%' }}
            message={<h3>Loading, please wait</h3>}
            loader={<Loader active type="ball-pulse-sync" color="#061b56" />}
          >
            <div>
              <div className="container pd-t-30">
                {/* <div className="product">
                  <div className="row__header">
                    <span className="product__category-big">
                      <Tooltip
                        placement="right"
                        autoAdjustOverflow="true"
                        title=""
                      >
                        Brands
                      </Tooltip>
                    </span>
                  </div>
                  <Brands />
                </div> */}

                <div className="product">
                  <div className="row__header">
                    <span className="product__category-big">
                      <Tooltip
                        placement="right"
                        autoAdjustOverflow="true"
                        title="Lowest ask are the products listed width the lowest ask"
                      >
                        Lowest Ask
                        <FontAwesomeIcon
                          icon={faInfoCircle}
                          className="product__info"
                        />
                      </Tooltip>
                    </span>
                    {/* <Link className="see__all">See all </Link> */}
                  </div>
                  <Product
                    data={home.dataHome.lowestAsks}
                    title={'Lowest Ask'}
                  />
                </div>

                <div className="product">
                  <div className="row__header">
                    <span className="product__category-big">
                      <Tooltip
                        placement="right"
                        autoAdjustOverflow="true"
                        title="Highest Bid are the products listed width the highest Bid"
                      >
                        Highest Bid
                        <FontAwesomeIcon
                          icon={faInfoCircle}
                          className="product__info"
                        />
                      </Tooltip>
                    </span>
                    {/* <Link className="see__all">See all </Link> */}
                  </div>
                  <Product
                    data={home.dataHome.highestBids}
                    title={'Highest Bid'}
                  />
                </div>

                <div className="product">
                  <div className="row__header">
                    <span className="product__category-big">
                      <Tooltip
                        placement="right"
                        autoAdjustOverflow="true"
                        title="All products"
                      >
                        Other
                        <FontAwesomeIcon
                          icon={faInfoCircle}
                          className="product__info"
                        />
                      </Tooltip>
                    </span>
                    {/* <Link className="see__all">See all </Link> */}
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
                        <img src={img1} alt="" title="Lojualguebeli.com" />
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
                        <img src={img2} alt="" title="Lojualguebeli.com" />
                      </div>
                      <div className="pilihLjgb__item__caption">
                        <p>
                          7000+ Wiraniaga yang siap membantu melayani pelanggan.
                          Semua sales resmi dari authorized dealer dengan
                          didukung sistem yang terintegrasi
                        </p>
                      </div>
                    </div>

                    <div className="pilihLjgb__item">
                      <div className="pilihLjgb__item__img">
                        <img src={img3} alt="" title="Lojualguebeli.com" />
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
          </BlockUi>
          <Modal
            title="Silahkan Pilih Provinsi Anda"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <span className="search__label">Provinsi</span>
            <Select
              className="labelBlack"
              showSearch
              style={{ width: 200 }}
              placeholder="Select Provinsi"
              optionFilterProp="children"
              value={home.search.provinsi}
              onChange={event => {
                handleChange('search', 'provinsi', event);
              }}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {(home.dataProvinsi !== undefined ? home.dataProvinsi : []).map(
                (x, index) => {
                  return (
                    <Option key={index} value={x.id}>
                      {x.text}
                    </Option>
                  );
                }
              )}
            </Select>
          </Modal>
        </main>
      </BlockUi>
    );
  }
}

const mapStateToProps = state => ({
  home: state.homeReducer
});
export default connect(mapStateToProps, {
  ...actions
})(Home);
