import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Radio } from 'antd';
// import { Carousel } from 'react-bootstrap';

import $ from 'jquery';
import Slider from 'react-slick';
import BreadCrumb from '../../components/layouts/common/breadcrumb';

// import Img1 from './../../images/color/black.jpeg';
// import Img2 from './../../images/color/black2.jpeg';
// import Img3 from './../../images/color/red.jpeg';
// import Img4 from './../../images/color/silver.jpeg';
// import Img5 from './../../images/color/white.jpeg';
// import Img6 from './../../images/color/yellow.jpeg';
import { connect } from 'react-redux';
import { actions } from '../../actions/trasactionAction';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Tooltip } from 'antd';
// import Product from '../../components/layouts/common/product';
// import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import BlockUi from 'react-block-ui';

// const { Option } = Select;

class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      allAsk: false,
      allBid: false,
      visibleAsk: false,
      nav1: null,
      nav2: null
      // lowestask: '',
      // highestbid: '',
      // year: ''
    };
    this.onShowMore = this.onShowMore.bind(this);
    this.showAllAsk = this.showAllAsk.bind(this);
  }
  componentWillMount() {
    const { getDataWarna, getDataTransaksi, handleChange } = this.props;
    $('.navbar').removeClass('navbar-dark');
    $('.navbar').addClass('bg-cl-white');
    let getData = this.props.location.search.replace('?', '');
    let type = {
      target: { value: getData === 'ask' ? 'place ask' : 'place bid' }
    };
    getDataWarna();
    getDataTransaksi();
    handleChange(type, 'type');
  }

  componentDidMount() {
    const { transaction } = this.props;
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  onShowMore() {
    this.setState({
      showMore: !this.state.showMore
    });
  }
  showAllAsk = () => {
    let getData = this.props.location.search.replace('?id=', '');
    this.props.GetAllAsk(getData);
    this.setState({
      visibleAsk: true
    });
  };
  showAllBid = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
      visibleAsk: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
      visibleAsk: false
    });
  };

  sliderImage(datas) {
    let image = datas.map((x, i) => {
      return (
        // <div>
        <div className="detail__imgSlide--big">
          <img src={x.photopath} alt="" title="Lojualguebeli.com" />
          <b>{x.color}</b>
        </div>
        // </div >
      );
    });
    return image;
  }

  validateProcess() {
    let getData = this.props.location.search.replace('?', '');
    if (localStorage.getItem('idToken') === null) {
      let getLast = this.props.location.search;
      localStorage.setItem('path', getLast);
      window.location.href = '/login';
    } else {
      this.props.processData(getData);
    }
  }

  sliderImageKanan(datas) {
    const { handleChange } = this.props;
    let image = datas.map((x, i) => {
      return (
        <div>
          <div
            className="detail__imgSlide--small"
            onClick={e => {
              handleChange('price', {
                target: { value: x.lowestask }
              });
              handleChange('lowestask', {
                target: { value: x.lowestask }
              });
              handleChange('highestbid', {
                target: { value: x.highestbid }
              });
              handleChange('year', {
                target: { value: x.year }
              });
            }}
          >
            <img src={x.photopath} alt="" />
          </div>
        </div>
      );
    });
    return image;
  }

  numberWithCommas(x) {
    let str = x === null || x === '' ? '' : x.toString();
    if (str !== '' && str.length >= 7) {
      str = str.substring(0, str.length - 6);
      str = str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      return str + ' JT';
    }
  }

  render() {
    const settings = {
      dots: false,
      arrow: true,
      infinite: true,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      // nextArrow: <Icon type="caret-up" />,
      // prevArrow: <Icon type="caret-down" />,
      beforeChange: function(currentSlide, nextSlide) {
        console.log('before change', currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log('after change', currentSlide);
      }
    };

    const { transaction, handleChange } = this.props;
    // const columns = [
    //   {
    //     title: 'Nama',
    //     dataIndex: 'name',
    //     key: 'name'
    //   },
    //   {
    //     title: 'Price',
    //     dataIndex: 'price',
    //     ke: 'price'
    //   }
    // ];
    // const rowSelection = {
    //   onChange: (selectedRowKeys, selectedRows) => {
    //     console.log(
    //       `selectedRowKeys: ${selectedRowKeys}`,
    //       'selectedRows: ',
    //       selectedRows
    //     );
    //   }
    // };

    let getData = this.props.location.search.replace('?', '');
    return (
      <BlockUi
        tag="div"
        blocking={transaction.isLoading}
        style={{ width: '100%' }}
      >
        <main role="main">
          <div className="container">
            <BreadCrumb breadName={transaction.dataDetail.carDetail.name} />

            <div className="detail">
              <div className="detail__body">
                <div className="row">
                  <div className="col-md-8 mb-4">
                    <div className="row">
                      <div className="col-md-9">
                        <div className="detail__body__img transaction__img">
                          <Slider
                            asNavFor={this.state.nav2}
                            ref={slider => (this.slider1 = slider)}
                            fade={true}
                          >
                            {this.sliderImage(transaction.dataTransaction)}

                            {/* <div>
                              <div className="detail__imgSlide--big">
                                <img src={Img1} alt="" />
                              </div>
                            </div>
                            <div>
                              <div className="detail__imgSlide--big">
                                <img src={Img2} alt="" />
                              </div>
                            </div>
                            <div>
                              <div className="detail__imgSlide--big">
                                <img src={Img3} alt="" />
                              </div>
                            </div>
                            <div>
                              <div className="detail__imgSlide--big">
                                <img src={Img4} alt="" />
                              </div>
                            </div>
                            <div>
                              <div className="detail__imgSlide--big">
                                <img src={Img5} alt="" />
                              </div>
                            </div>
                            <div>
                              <div className="detail__imgSlide--big">
                                <img src={Img6} alt="" />
                              </div>
                            </div> */}
                          </Slider>
                        </div>
                      </div>
                      <div className="col-3">
                        <Slider
                          asNavFor={this.state.nav1}
                          ref={slider => (this.slider2 = slider)}
                          slidesToShow={4}
                          swipeToSlide={true}
                          focusOnSelect={true}
                          className="slideTrigger"
                          {...settings}
                        >
                          {this.sliderImageKanan(transaction.dataTransaction)}
                          {/* <div>
                            <div className="detail__imgSlide--small">
                              <img src={Img1} alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="detail__imgSlide--small">
                              <img src={Img2} alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="detail__imgSlide--small">
                              <img src={Img3} alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="detail__imgSlide--small">
                              <img src={Img4} alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="detail__imgSlide--small">
                              <img src={Img5} alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="detail__imgSlide--small">
                              <img src={Img6} alt="" />
                            </div>
                          </div> */}
                        </Slider>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="transaction">
                      <div className="bgWhite">
                        <div className="mb-4">
                          <h4>
                            Rp. {this.numberWithCommas(transaction.lowestask)}
                          </h4>
                          {/* <h4>Rp.999.999.999.999</h4> */}
                        </div>

                        <Radio.Group
                          onChange={e => {
                            if (
                              e.target.value === 'sell now' ||
                              e.target.value === 'buy now'
                            ) {
                              handleChange('price', {
                                target: { value: transaction.lowestask }
                              });
                            } else {
                              handleChange('price', { target: { value: '' } });
                            }
                            handleChange(e, 'type');
                          }}
                          defaultValue={
                            getData === 'ask' ? 'place ask' : 'place bid'
                          }
                          className="btnRadio__group mb-4"
                        >
                          <Radio.Button
                            className="btn btnRadio"
                            value={
                              getData === 'ask' ? 'place ask' : 'place bid'
                            }
                          >
                            {getData === 'ask' ? 'Place Ask' : 'Place Bid'}
                          </Radio.Button>
                          <Radio.Button
                            className="btn btnRadio"
                            value="buy now"
                          >
                            {getData === 'ask' ? 'Sell Now' : 'Buy Now'}
                          </Radio.Button>
                        </Radio.Group>

                        <div className="field mb-4">
                          <input
                            type="text"
                            name="price"
                            id="price"
                            onChange={handleChange.bind(this, 'price')}
                            value={transaction.price}
                            disabled={
                              transaction.type === 'sell now' ||
                              transaction.type === 'buy now'
                                ? true
                                : false
                            }
                          />
                        </div>
                        <button
                          className="btn btn-primary w-100"
                          onClick={this.validateProcess.bind(this)}
                        >
                          Process
                        </button>
                      </div>
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
  transaction: state.transactionReducer
});
export default connect(
  mapStateToProps,
  {
    ...actions
  }
)(Transaction);
