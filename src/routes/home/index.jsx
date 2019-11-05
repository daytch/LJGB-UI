import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCar } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { actions } from '../../actions/homeAction';
import { Select } from 'antd';

import BoxItem from '../../components/layouts/common/boxItem';

const { Option } = Select;

class Home extends Component {
  componentWillMount() {
    this.props.getDataHome();
  }
  render() {
    return (
      <main role="main">
        <div className="slider__top">
          <Carousel fade="true">
            <Carousel.Item>
              <div className="">
                <div class="head__image">
                  <img
                    src="https://www.kudosprime.com/gt6/images/users/car_87_28880_54c90a2e8a721.jpg"
                    alt=""
                    class=""
                  />
                </div>
                <div class="slider__caption">
                  <div class="container">
                    <div class="txt1">
                      <span>FIND YOUR DREAM CAR</span>
                    </div>
                    <div class="txt2">CAR M5 GRAN TURISMO</div>
                    <div class="txt3">MODEL 2017</div>
                    <div class="txt3">
                      <span>$64,000</span>
                    </div>
                    <div className="txt3 color-green">
                      <Link>SEE DETAILS</Link>
                    </div>
                    {/* <div class="link1">
                      <a href="details.html" class="slider__link">
                        <span>SEE DETAILS</span>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="">
                <div class="head__image">
                  <img
                    src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/911-road-3629a.jpg?itok=m6x23Go0"
                    alt=""
                    class=""
                  />
                </div>
                <div class="slider__caption">
                  <div class="container">
                    <div class="txt1">
                      <span>FIND YOUR DREAM CAR</span>
                    </div>
                    <div class="txt2">CAR M7 GRAN TURISMO</div>
                    <div class="txt3">MODEL 2019</div>
                    <div class="txt3">
                      <span>$90,000</span>
                    </div>
                    <div className="txt3 color-green">
                      <Link>SEE DETAILS</Link>
                    </div>
                    {/* <div class="link1">
                      <a href="details.html" class="slider__link"></a>
                      <Link class="slider__link">
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
                    <span className="search__label">Select City</span>
                    <Select
                      showSearch
                      style={{ width: 200 }}
                      placeholder="Select city"
                      optionFilterProp="children"
                      // onChange={onChange}
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="1">Jakarta</Option>
                      <Option value="2">Bandung</Option>
                      <Option value="3">Surabaya</Option>
                    </Select>
                  </div>

                  <div className="col-6 col-md">
                    <span className="search__label">Select Brand</span>
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
                    <span className="search__label">Select Model</span>
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
                    <span className="search__label">Select Type</span>
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container">
            <div className="product">
              <h3 className="product__category-big">Lowest Ask</h3>

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
