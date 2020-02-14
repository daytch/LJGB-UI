import React, { Component } from 'react';

// import { Link } from 'react-router-dom';
// import { Carousel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { actions } from '../../actions/homeAction';
import { Select, Pagination } from 'antd';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import BlockUi from 'react-block-ui';
import { Loader, Types } from 'react-loaders';
// import Selected from './../../components/globalComponents/customSelect';
import Product from '../../components/layouts/common/product';
import Banner from '../../components/layouts/common/carousel/banner';

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
    if (
      localStorage.getItem('city') !== '' &&
      localStorage.getItem('city') !== null
    ) {
      this.props.getDataBrand(this, '', parseInt(localStorage.getItem('city')));
      this.props.handleChange(
        'search',
        'city',
        parseInt(localStorage.getItem('city'))
      );
    }
    if (
      localStorage.getItem('brand') !== '' &&
      localStorage.getItem('brand') !== null
    ) {
      this.props.getDataBrand(this, '', parseInt(localStorage.getItem('city')));
      this.props.handleChange(
        'search',
        'brand',
        parseInt(localStorage.getItem('brand'))
      );
      this.props.getDataModel();
    }
    if (
      localStorage.getItem('model') !== '' &&
      localStorage.getItem('model') !== null
    ) {
      this.props.getDataModel();
      this.props.handleChange(
        'search',
        'model',
        parseInt(localStorage.getItem('model'))
      );
      this.props.getDataType();
    }
    if (
      localStorage.getItem('type') !== '' &&
      localStorage.getItem('type') !== null
    ) {
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
    $('#logoWhite').css({ display: 'block' });
    $('#logoDark').css({ display: 'none' });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    this.props.handleChange('search', 'city', []);
    this.props.handleChange('search', 'brand', []);
    this.props.handleChange('search', 'model', []);
    this.props.handleChange('search', 'type', []);
    localStorage.removeItem('city');
    localStorage.removeItem('brand');
    localStorage.removeItem('model');
    localStorage.removeItem('type');

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

  changePage(pagination, filters, sorter) {
    console.log(filters);
    const { handleChange, getSearch } = this.props;
    handleChange('search', 'dataNumber', pagination * filters);
    handleChange('search', 'pageSize', filters);
    getSearch();
  }

  render() {
    const {
      home,
      handleChange,
      getDataBrand,
      getDataModel,
      getDataType,
      getSearch
    } = this.props;
    let form = 'search';
    return (
      <main role="main" style={{ marginTop: '0' }}>
        <div className="slider__top pageSearch">
          <Banner />

          <div className="search">
            <div className="container">
              <div className="select__wrapper">
                <div className="row">
                  <div className="col-md-3 col-sm-6 col-6">
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

                  <div className="col-md-3 col-sm-6 col-6">
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
                      {(home.dataBrand !== undefined ? home.dataBrand : []).map(
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

                  <div className="col-md-3 col-sm-6 col-6">
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
                      {(home.dataModel !== undefined ? home.dataModel : []).map(
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

                  <div className="col-md-3 col-sm-6 col-6">
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
                      <button
                        className="btn btn-success"
                        onClick={e => {
                          handleChange('search', 'dataNumber', 0);
                          handleChange('search', 'pageSize', 25);
                          getSearch();
                        }}
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

        <BlockUi
          tag="div"
          blocking={home.isLoadingHome}
          style={{ width: '100%' }}
          message={<h3>Loading, please wait</h3>}
          keepInView
          loader={<Loader active type="ball-pulse-sync" color="#061b56" />}
        >
          <div>
            <div className="container pd-t-30">
              <div className="product search__result">
                <div className="row__header">
                  <span className="product__category-big">Hasil Pencarian</span>
                  <div className="see__all noArrow">
                    Result {home.search.total}
                  </div>
                  {/* <div
                      style={{
                        float: 'right',
                        width: '200px',
                        marginRight: '20px'
                      }}
                    >
                      <Select defaultValue="1" style={{ width: 120 }}>
                        <Option value="1">Featured</Option>
                        <Option value="2">Most Popular</Option>
                        <Option value="3">New Lowest Asks</Option>
                        <Option value="3">New Highest Bids</Option>
                        <Option value="3">Average Sale Price</Option>
                        <Option value="3">Total Sold</Option>
                        <Option value="3">Volatility</Option>
                        <Option value="3">Price Premium</Option>
                        <Option value="3">Lowest Ask</Option>
                        <Option value="3">Highest Bid</Option>
                        <Option value="3">Released Date</Option>
                      </Select>
                    </div> */}
                  <Product data={home.dataSearch} title={''} />
                </div>
                <Pagination
                  defaultCurrent={1}
                  total={home.search.total}
                  onChange={this.changePage.bind(this)}
                  defaultPageSize={home.search.pageSize}
                />
              </div>
            </div>
          </div>
        </BlockUi>
      </main>
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
