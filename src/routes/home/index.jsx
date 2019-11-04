import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCar } from '@fortawesome/free-solid-svg-icons';

import { Select } from 'antd';

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

const Home = () => {
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
                    <span>FIND MY DREAM CAR</span>
                  </div>
                  <div class="txt2">CAR M5 GRAN TURISMO</div>
                  <div class="txt3">MODEL 2017</div>
                  <div class="txt3">
                    <span>$64,000</span>
                  </div>
                  <div class="link1">
                    <a href="details.html" class="slider__link">
                      <span>SEE DETAILS</span>
                    </a>
                  </div>
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
                  <div class="txt2">CAR M5 GRAN TURISMO</div>
                  <div class="txt3">
                    MODEL 2017 <span>$64,000</span>
                  </div>
                  {/* <div class="txt4">MODEL 2017 <span>$64,000</span></div> */}
                  <div class="link1">
                    {/* <a href="details.html" class="slider__link"></a> */}
                    <Link class="slider__link">
                      <span>SEE DETAILS</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        <div className="search">
          {/* <Select2
            data={[
              { text: 'Jakarta', id: 1 },
              { text: 'Bandung', id: 2 },
              { text: 'Surabaya', id: 3 },
            ]}
            options={{
              placeholder: 'Select City',
            }}
          /> */}
          <div className="container">
            <div className="select__wrapper">
              <div className="row">
                <div className="col-6 col-md">
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select city"
                    optionFilterProp="children"
                    onChange={onChange}
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
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select brand"
                    optionFilterProp="children"
                    onChange={onChange}
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
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select model"
                    optionFilterProp="children"
                    onChange={onChange}
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
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select type"
                    optionFilterProp="children"
                    onChange={onChange}
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
                <Link to="/">
                  <div className="product__item">
                    <div className="product__image__small">
                      <img
                        src="https://www.kudosprime.com/gt6/images/users/car_87_28880_54c90a2e8a721.jpg"
                        alt=""
                      />
                    </div>
                    <div className="product__caption">
                      <p className="product__category">Lowest Ask</p>
                      <p className="product__title">AUTO 330e iPERFORMANCE</p>
                      <p className="product__price">
                        <span className="">Rp.100</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-6 col-md">
                <Link to="/">
                  <div className="product__item">
                    <div className="product__image__small">
                      <img
                        src="https://www.kudosprime.com/gt6/images/users/car_87_28880_54c90a2e8a721.jpg"
                        alt=""
                      />
                    </div>
                    <div className="product__caption">
                      <p className="product__category">Lowest Ask</p>
                      <p className="product__title">AUTO 330e iPERFORMANCE</p>
                      <p className="product__price">
                        <span className="">Rp.100</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-6 col-md">
                <Link to="/">
                  <div className="product__item">
                    <div className="product__image__small">
                      <img
                        src="https://www.kudosprime.com/gt6/images/users/car_87_28880_54c90a2e8a721.jpg"
                        alt=""
                      />
                    </div>
                    <div className="product__caption">
                      <p className="product__category">Lowest Ask</p>
                      <p className="product__title">AUTO 330e iPERFORMANCE</p>
                      <p className="product__price">
                        <span className="">Rp.100</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-6 col-md">
                <Link to="/">
                  <div className="product__item">
                    <div className="product__image__small">
                      <img
                        src="https://www.kudosprime.com/gt6/images/users/car_87_28880_54c90a2e8a721.jpg"
                        alt=""
                      />
                    </div>
                    <div className="product__caption">
                      <p className="product__category">Lowest Ask</p>
                      <p className="product__title">AUTO 330e iPERFORMANCE</p>
                      <p className="product__price">
                        <span className="">Rp.100</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-6 col-md">
                <Link to="/">
                  <div className="product__item">
                    <div className="product__image__small">
                      <img
                        src="https://www.kudosprime.com/gt6/images/users/car_87_28880_54c90a2e8a721.jpg"
                        alt=""
                      />
                    </div>
                    <div className="product__caption">
                      <p className="product__category">Lowest Ask</p>
                      <p className="product__title">AUTO 330e iPERFORMANCE</p>
                      <p className="product__price">
                        <span className="">Rp.100</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
