import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCar } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import { actions } from '../../actions/homeAction';

class Home extends Component {
  componentWillMount() {
    this.props.getDataHome();
  }
  render() {
    return (
      <main role="main">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">
              Test! <FontAwesomeIcon icon={faCar} />{' '}
            </h1>
            <p>
              This is a template for a simple marketing or informational
              website. It includes a large callout called a jumbotron and three
              supporting pieces of content. Use it as a starting point to create
              something more unique.
            </p>
            <p>
              <a className="btn btn-primary btn-lg" href="#body" role="button">
                Learn more &raquo;
              </a>
            </p>
          </div>
        </div>

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
