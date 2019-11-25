import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Radio, InputNumber } from 'antd';
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
    $('.navbar').removeClass('navbar-dark');
    $('.navbar').addClass('bg-cl-white');
    $('#logoWhite').css({ display: 'none' });
    $('#logoDark').css({ display: 'block' });

    const { getDataWarna, getDataTransaksi, handleChange } = this.props;
    $('.navbar').removeClass('navbar-dark');
    $('.navbar').addClass('bg-cl-white');
    let getData = this.props.location.search.replace('?id=', '');
    var status = getData.replace(/[0-9]/g, '');
    var id = getData.replace(/[a-z]/g, '');
    this.props.getDataDetail(id);
    let type = {
      target: { value: status === 'ask' ? 'place ask' : 'place bid' }
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
    var id = getData.replace(/[a-z]/g, '');
    this.props.GetAllAsk(id);
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
    let getData = this.props.location.search.replace('?id=', '');
    var status = getData.replace(/[0-9]/g, '');
    var id = getData.replace(/[a-z]/g, '');
    if (localStorage.getItem('idToken') === null) {
      let getLast = this.props.location.search;
      localStorage.setItem('path', getLast);
      window.location.href = '/login';
    } else {
      this.props.processData(status, id);
    }
  }

  sliderImageKanan(datas) {
    const { handleChange, transaction } = this.props;
    let image = datas.map((x, i) => {
      let getData = transaction;
      return (
        <div className="pad-0-5">
          <div
            className="detail__imgSlide--small"
            onClick={e => {
              let getType = getData.type;
              if (getType == 'sell now' || getType == 'buy now') {
                handleChange('price', {
                  target: { value: x.lowestask }
                });
              } else {
                handleChange('price', {
                  target: { value: x.highestbid == null ? '' : x.highestbid }
                });
              }
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
    // let str = x === null || x === '' ? '' : x.toString();
    // if (str !== '' && str.length >= 7) {
    //   str = str.substring(0, str.length - 6);
    //   str = str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    //   return str + ' JT';
    // }
  }

  changeFormat(x) {
    let str = x.toString();
    str = str.replace(/\$\s?|(,*)/g, '');
    str = str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return str;
  }

  render() {
    const settingSlider1 = {
      arrow: false,
      dots: false,
      initialSlide: 0,
      infinite: true,
      slidesToScroll: 1,
      // appendDots: dots => (
      //   <div
      //     style={{
      //       bottom: "-40px",
      //     }}
      //   >
      //     <ul style={{ margin: "0px" }}> {dots} </ul>
      //   </div>
      // ),
      // customPaging: i => (
      //   <div className="small-img" >
      //     {this.sliderImageBottom(transaction.dataTransaction)}
      //   </div>
      // ),
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrow: false,
            dots: false
          }
        }
      ]
    };
    const settingSlider2 = {
      dots: false,
      arrow: true,
      initialSlide: 0,
      infinite: true,
      slidesToScroll: 1,
      // slidesToShow:10,
      rows: 1,
      slidesPerRow: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrow: false,
            initialSlide: 0,
            slidesToShow: 4,
            slidesToScroll: 1,
            vertical: false,
            verticalSwiping: false
          }
        }
      ],
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

    let getD = this.props.location.search.replace('?id=', '');
    var getData = getD.replace(/[0-9]/g, '');
    return (
      <BlockUi
        tag="div"
        blocking={transaction.isLoading}
        style={{ width: '100%' }}
      >
        <main role="main">
          <div className="container">
            <BreadCrumb breadName={transaction.dataDetail.carDetail.name} />

            <div className="detail pt-3">
              <div className="detail__body">
                <div className="row">
                  <div className="col-md-8 mb-4">
                    <div className="detail__body__img transaction__img">
                      <Slider
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}
                        fade={true}
                        initialSlide={0}
                        {...settingSlider1}
                      >
                        {this.sliderImage(transaction.dataTransaction)}
                      </Slider>
                    </div>
                    <Slider
                      asNavFor={this.state.nav1}
                      ref={slider => (this.slider2 = slider)}
                      slidesToShow={4}
                      initialSlide={0}
                      swipeToSlide={true}
                      focusOnSelect={true}
                      className="slideTrigger"
                      {...settingSlider2}
                    >
                      {this.sliderImageKanan(transaction.dataTransaction)}
                    </Slider>
                  </div>
                  <div className="col-md-4">
                    <div className="transaction">
                      <div className="mb-4">
                        <h4>
                          Rp. {this.numberWithCommas(transaction.lowestask)}
                        </h4>
                      </div>
                      <div className="bgWhite">
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
                            value={getData === 'ask' ? 'sell now' : 'buy now'}
                          >
                            {getData === 'ask' ? 'Sell Now' : 'Buy Now'}
                          </Radio.Button>
                        </Radio.Group>

                        <div className="field mb-4">
                          <div class="input-group">
                            {/* <span class="input-group-addon form-control">Rp</span> */}
                            <input
                              type="text"
                              name="price"
                              id="price"
                              // pattern="^\[0-9]\g"
                              // className="form-control"
                              onChange={handleChange.bind(this, 'price')}
                              value={this.changeFormat(transaction.price)}
                              disabled={
                                transaction.type === 'sell now' ||
                                transaction.type === 'buy now'
                                  ? true
                                  : false
                              }
                            />

                            {transaction.type == 'place ask' ||
                            transaction.type == 'place bid' ? (
                              <span className="minimum">
                                Minimum Rp.{' '}
                                {this.numberWithCommas(transaction.price)}
                              </span>
                            ) : null}
                          </div>
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
