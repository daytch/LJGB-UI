import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { actions } from '../../actions/homeAction';
import { Select, Tooltip } from 'antd';
import Selected from './../../components/globalComponents/customSelect';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

import Product from '../../components/layouts/common/product';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const { Option } = Select;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0
    };
  }

  componentWillMount() {
    // this.props.getDataHome();
    if (localStorage.getItem('city') !== null) {
      this.props.getDataBrand(this, '', parseInt(localStorage.getItem('city')));
      this.props.handleChange(
        'search',
        'city',
        parseInt(localStorage.getItem('city'))
      );
    }
    if (localStorage.getItem('brand') !== null) {
      this.props.getDataBrand(this, '', parseInt(localStorage.getItem('city')));
      this.props.handleChange(
        'search',
        'brand',
        parseInt(localStorage.getItem('brand'))
      );
      this.props.getDataModel();
    }
    if (localStorage.getItem('model') !== null) {
      this.props.getDataModel();
      this.props.handleChange(
        'search',
        'model',
        parseInt(localStorage.getItem('model'))
      );
      this.props.getDataType();
    }
    if (localStorage.getItem('type') !== null) {
      this.props.getDataType();
      this.props.handleChange(
        'search',
        'type',
        parseInt(localStorage.getItem('type'))
      );
    }

    this.props.getDataKota();
    this.props.getSearch();

    $('.navbar').addClass('navbar-dark');
    $('.navbar').removeClass('bg-cl-white');
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    // localStorage.removeItem('city')
    // localStorage.removeItem('brand')
    // localStorage.removeItem('model')
    // localStorage.removeItem('type')
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

  render() {
    const {
      home,
      handleChange,
      getDataBrand,
      getDataModel,
      getDataType
    } = this.props;
    console.log(home);
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
                        <button
                          className="btn btn-success"
                          onClick={this.props.getSearch.bind(this)}
                        >
                          Search
                        </button>
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
                  <span className="product__category-big">Hasil Pencarian</span>
                  <div className="see__all">Result 100 </div>
                  <Product data={home.dataSearch} title={''} />
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
)(Search);
