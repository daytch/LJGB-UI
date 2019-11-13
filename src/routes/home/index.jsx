import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { actions } from '../../actions/homeAction';
import { Select } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faCar,
  faCaretRight,
  faArrowRight,
  faArrowCircleRight,
  faCaretSquareRight
} from '@fortawesome/free-solid-svg-icons';
import Selected from './../../components/globalComponents/customSelect';

import Product from '../../components/layouts/common/product';
import $ from 'jquery';

const { Option } = Select;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0
    };
  }

  componentWillMount() {
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
    }
  };

  render() {
    const { home, handleChange, getDataBrand } = this.props;
    console.log(home);
    return (
      <main role="main" style={{ marginTop: '0' }}>
        <div className="slider__top">
          <Carousel fade="true">
            <Carousel.Item>
              <div className="">
                <div className="head__image">
                  <img
                    src="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/master/w_2560%2Cc_limit/Transpo_G70_TA-518126.jpg"
                    alt=""
                    className=""
                  />
                </div>
                <div className="slider__caption">
                  <div className="container">
                    <div className="txt1">
                      <span>FIND YOUR DREAM CAR</span>
                    </div>
                    <div className="txt2">CAR M5 GRAN TURISMO</div>
                    <div className="txt3">MODEL 2017</div>
                    <div className="txt3">
                      <span>$64,000</span>
                    </div>
                    <div className="txt3 color-green">
                      <Link>SEE DETAILS</Link>
                    </div>
                    {/* <div className="link1">
                      <a href="details.html" className="slider__link">
                        <span>SEE DETAILS</span>
                      </a>
                    </div> */}
                  </div>
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
                <div className="slider__caption">
                  <div className="container">
                    <div className="txt1">
                      <span>FIND YOUR DREAM CAR</span>
                    </div>
                    <div className="txt2">CAR M7 GRAN TURISMO</div>
                    <div className="txt3">MODEL 2019</div>
                    <div className="txt3">
                      <span>$90,000</span>
                    </div>
                    <div className="txt3 color-green">
                      <Link>SEE DETAILS</Link>
                    </div>
                    {/* <div className="link1">
                      <a href="details.html" className="slider__link"></a>
                      <Link className="slider__link">
                        <span>SEE DETAILS</span>
                      </Link>
                    </div> */}
                  </div>
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
                    <Selected
                      value={home.search.city}
                      placeholder="Select City"
                      data={home.dataKota}
                      form="search"
                      name="city"
                      onChange={(form, name, event) => {
                        handleChange(form, name, event);
                        getDataBrand(form, name, event);
                      }}
                    />
                  </div>

                  <div className="col-6 col-md">
                    <span className="search__label">Merk Mobil</span>
                    <Select
                      showSearch
                      style={{ width: 200 }}
                      placeholder="Select brand"
                      optionFilterProp="children"
                      // onChange={onChange}
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="1">Brand 1</Option>
                      <Option value="2">Brand 2</Option>
                      <Option value="3">Brand 3</Option>
                    </Select>
                  </div>

                  <div className="col-6 col-md">
                    <span className="search__label">Model Mobil</span>
                    <Select
                      showSearch
                      style={{ width: 200 }}
                      placeholder="Select model"
                      optionFilterProp="children"
                      // onChange={onChange}
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="1">Model 1</Option>
                      <Option value="2">Model 2</Option>
                      <Option value="3">Model 3</Option>
                    </Select>
                  </div>

                  <div className="col-6 col-md">
                    <span className="search__label">Tipe mobil</span>
                    <Select
                      showSearch
                      style={{ width: 200 }}
                      placeholder="Select type"
                      optionFilterProp="children"
                      // onChange={onChange}
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="1">Type 1</Option>
                      <Option value="2">Type 2</Option>
                      <Option value="3">Type 3</Option>
                    </Select>
                  </div>
                  <div className="col-md-12 col-md">
                    <div className="btn-center" style={{ marginTop: '15px' }}>
                      <button className="btn btn-success">Search</button>
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
                <span className="product__category-big">Lowest Ask</span>
                <Link className="see__all">See all </Link>
              </div>
              <Product data={home.dataHome.lowestAsks} />
            </div>

            <div className="product">
              <div className="row__header">
                <span className="product__category-big">Highest Bid</span>
                <Link className="see__all">See all </Link>
              </div>
              <Product data={home.dataHome.highestBids} />
            </div>

            <div className="product">
              <div className="row__header">
                <span className="product__category-big">Other</span>
                <Link className="see__all">See all </Link>
              </div>
              <Product data={home.dataHome.listNormal} />
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
                      RajaMobil.com memiliki 34 merk mobil di Indonesia. 500+
                      Dealer memiliki promo dan harga bersaing.
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
                      5000+ Wiraniaga yang memberikan promo mobil terbaru setiap
                      hari. Semua sales resmi dari authorized dealer siap
                      melayani Anda di mana saja. Minta penawaran, negosiasi
                      harga, hingga test drive di rumah.
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
                      Semua authorized dealer yang akan menghubungi Anda. Anda
                      bisa pesan mobil dari mana saja.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
)(Home);
