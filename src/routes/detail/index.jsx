import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Table, Select } from 'antd';
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
import { actions } from '../../actions/detailAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from 'antd';
import Product from '../../components/layouts/common/product';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import BlockUi from 'react-block-ui';
import '../../style/component/select.scss';

const { Option } = Select;

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      allAsk: false,
      allBid: false,
      visibleAsk: false,
      nav1: null,
      nav2: null,
      lowestask: '',
      highestbid: '',
      year: ''
    };
    this.onShowMore = this.onShowMore.bind(this);
    this.showAllAsk = this.showAllAsk.bind(this);
  }
  componentWillMount() {
    $('.navbar').removeClass('navbar-dark');
    $('.navbar').addClass('bg-cl-white');

    let getData = this.props.location.search.replace('?id=', '');
    this.props.getDataDetail(getData);
  }
  componentDidMount() {
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
    let getData = this.props.location.search.replace('?id=', '');
    this.props.GetAllBid(getData);
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

  numberWithCommas(x) {
    let str = x === null || x === '' ? '' : x.toString();
    if (str !== '' && str.length >= 7) {
      str = str.substring(0, str.length - 6);
      str = str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      return str + ' JT';
    }
  }

  sliderImage(datas) {
    let image = datas.map((x, i) => {
      return (
        // <div>
        <div className="detail__imgSlide--big">
          <img src={x.photopath} alt="" />
          <b>{x.color}</b>
        </div>
        // </div >
      );
    });
    return image;
  }

  sliderImageKanan(datas) {
    let image = datas.map((x, i) => {
      return (
        <div
          className="detail__imgSlide--small"
          onClick={this.setData.bind(this, x.lowestask, x.highestbid, x.year)}
        >
          <img src={x.photopath} alt="" />
          <b>{x.color}</b>
        </div>
      );
    });
    return image;
  }

  setData(ask, bid, year) {
    this.setState({
      lowestask: ask,
      highestbid: bid,
      year: year
    });
  }

  render() {
    const settingSlider1 = {
      arrow: true,
      dots: false
    };
    const settingSlider2 = {
      dots: false,
      arrow: true,
      infinite: false,
      slidesToScroll: 1,
      // row:2,
      // slidesPerRow: 2,
      vertical: true,
      verticalSwiping: true,
      // nextArrow: <Icon type="caret-up" />,
      // prevArrow: <Icon type="caret-down" />,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrow: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 1,
            vertical: false,
            verticalSwiping: false
          }
        }
        // {
        //   breakpoint: 480,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1
        //   }
        // }
      ],
      beforeChange: function(currentSlide, nextSlide) {
        console.log('before change', currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log('after change', currentSlide);
      }
    };

    const columns = [
      {
        title: 'Nama',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Price',
        dataIndex: 'price',
        ke: 'price'
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity',
        ke: 'quantity'
      }
    ];

    const { detail } = this.props;
    console.log(detail);
    return (
      <BlockUi tag="div" blocking={detail.isLoading} style={{ width: '100%' }}>
        <main role="main">
          <div className="container">
            <BreadCrumb breadName={detail.dataDetail.carDetail.name} />

            <div className="detail">
              <div className="detail__header">
                <div className="row">
                  <div className="col-md-12">
                    <h1>{detail.dataDetail.carDetail.name}</h1>
                    <div className="detail__header__small">
                      <div className="detail__header__item">
                        <p>
                          Condition: <span>New</span>
                        </p>
                      </div>
                      <div className="detail__header__item">
                        <p>
                          Year: <span>{this.state.year}</span>
                          {/* Year: <span>{detail.dataDetail.carDetail.year}</span> */}
                        </p>
                      </div>
                      <div className="detail__header__item">
                        <p>
                          <span>100% Authentic</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="detail__market">
                  <div className="bid left">
                    <Link to="/transaction?bid">
                      <button className="btn btn-success">
                        <div className="bid__text left">
                          <span className="bid__text--big">
                            {this.numberWithCommas(this.state.lowestask)}
                            {/* {this.numberWithCommas(
                              detail.dataDetail.carDetail.lowestask
                            )} */}
                          </span>
                          <span className="bid__text--small">Lowest Ask</span>
                        </div>
                        <div className="bid__text right">
                          <span className="bid__text--big">Buy</span>
                          <span className="bid__text--small">or Bid</span>
                        </div>
                      </button>
                    </Link>
                    <a onClick={this.showAllAsk}>View All Asks</a>
                    <Modal
                      title="All Asks"
                      visible={this.state.visibleAsk}
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                    >
                      <Table
                        dataSource={detail.dataAllAsk}
                        columns={columns}
                        pagination={{
                          pageSize: 5
                        }}
                      />
                    </Modal>
                  </div>
                  <div className="bid right">
                    <Link to="/transaction?ask">
                      <button className="btn btn-danger">
                        <div className="bid__text left">
                          <span className="bid__text--big">
                            {this.numberWithCommas(this.state.highestbid)}
                            {/* {this.numberWithCommas(
                              detail.dataDetail.carDetail.highestbid
                            )} */}
                          </span>
                          <span className="bid__text--small">Highest Bid</span>
                        </div>
                        <div className="bid__text right">
                          <span className="bid__text--big">Sell</span>
                          <span className="bid__text--small">or Ask</span>
                        </div>
                      </button>
                    </Link>
                    <a onClick={this.showAllBid}>View All Bids</a>
                    <Modal
                      title="All Bids"
                      visible={this.state.visible}
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                    >
                      <Table
                        dataSource={detail.dataAllBid}
                        columns={columns}
                        pagination={{
                          pageSize: 5
                        }}
                      />
                    </Modal>
                  </div>
                  <div className="model">
                    <Select defaultValue="1" style={{ width: 120 }}>
                      <Option value="1" className="model__select__option">
                        Model 1Model 1Model 1Model 1Model 1
                      </Option>
                      <Option value="2" className="model__select__option">
                        Model 2
                      </Option>
                      <Option value="3" className="model__select__option">
                        Model 3
                      </Option>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="detail__body">
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <div className="row">
                      <div className="col-md-9">
                        <div className="detail__body__img">
                          <Slider
                            asNavFor={this.state.nav2}
                            ref={slider => (this.slider1 = slider)}
                            fade={true}
                            {...settingSlider1}
                          >
                            {this.sliderImage(
                              detail.dataDetail.sP_GetPhotoAndWarnaByBarangIDS
                            )}
                            {/* <div>
                              <div className="detail__imgSlide--big" >
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
                      <div className="col-md-3">
                        <Slider
                          asNavFor={this.state.nav1}
                          ref={slider => (this.slider2 = slider)}
                          slidesToShow={3}
                          swipeToSlide={true}
                          focusOnSelect={true}
                          className="slideTrigger"
                          {...settingSlider2}
                        >
                          {this.sliderImageKanan(
                            detail.dataDetail.sP_GetPhotoAndWarnaByBarangIDS
                          )}
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

                  {/* <div className="col-md-4">
                    <div className="detail__product">
                      <p>
                        Sistem Bahan Bakar <span>Direct Injection</span>
                      </p>
                      <p>
                        Bahan Bakar <span>Bensin</span>
                      </p>
                      <p>
                        Sistem Bahan Bakar <span>Direct Injection</span>
                      </p>
                      <p>
                        Bahan Bakar <span>Bensin</span>
                      </p>
                      <p>
                        Bahan Bakar <span>Bensin</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div
                      className={
                        this.state.showMore
                          ? 'detail__desc detail__desc--show'
                          : 'detail__desc'
                      }
                    >
                      <p>
                        
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque a accumsan arcu. Proin eu efficitur risus.
                        Maecenas finibus porttitor orci sit amet mollis. Duis
                        libero ipsum, volutpat et feugiat id, vestibulum at est.
                        Sed faucibus ex eu erat malesuada, in ultricies lorem
                        tristique. Cras molestie ligula vel turpis sagittis
                        varius. Cras sem ex, rhoncus eget nisi sit amet,
                        molestie consectetur diam. Pellentesque posuere velit
                        lectus, in tristique sapien facilisis vitae. Ut velit
                        risus, viverra sed facilisis ut, ultricies vel ligula.
                      </p>
                      <p>
                        Proin porta diam a orci pharetra auctor. Fusce ultrices
                        nunc ut bibendum feugiat. Aliquam quis rhoncus nisi, sed
                        auctor mi. Ut suscipit urna lectus, facilisis pretium mi
                        suscipit in. Aliquam mattis purus ut porttitor
                        tincidunt. Fusce vel felis quis diam elementum fringilla
                        ut euismod velit. Vestibulum eu gravida augue. Nulla
                        varius metus ac est ultricies, sed euismod velit
                        maximus. Sed at consectetur nisi, sed convallis purus.
                        Donec luctus bibendum placerat. Praesent eu lorem
                        sodales, dignissim diam in, dignissim leo. Phasellus
                        egestas aliquam diam, posuere tristique velit ultrices
                        eget. Suspendisse efficitur nec odio et consequat. Sed
                        id leo nec sem lacinia mollis.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque a accumsan arcu. Proin eu efficitur risus.
                        Maecenas finibus porttitor orci sit amet mollis. Duis
                        libero ipsum, volutpat et feugiat id, vestibulum at est.
                        Sed faucibus ex eu erat malesuada, in ultricies lorem
                        tristique. Cras molestie ligula vel turpis sagittis
                        varius. Cras sem ex, rhoncus eget nisi sit amet,
                        molestie consectetur diam. Pellentesque posuere velit
                        lectus, in tristique sapien facilisis vitae. Ut velit
                        risus, viverra sed facilisis ut, ultricies vel ligula.
                      </p>
                      <p>
                        Proin porta diam a orci pharetra auctor. Fusce ultrices
                        nunc ut bibendum feugiat. Aliquam quis rhoncus nisi, sed
                        auctor mi. Ut suscipit urna lectus, facilisis pretium mi
                        suscipit in. Aliquam mattis purus ut porttitor
                        tincidunt. Fusce vel felis quis diam elementum fringilla
                        ut euismod velit. Vestibulum eu gravida augue. Nulla
                        varius metus ac est ultricies, sed euismod velit
                        maximus. Sed at consectetur nisi, sed convallis purus.
                        Donec luctus bibendum placerat. Praesent eu lorem
                        sodales, dignissim diam in, dignissim leo. Phasellus
                        egestas aliquam diam, posuere tristique velit ultrices
                        eget. Suspendisse efficitur nec odio et consequat. Sed
                        id leo nec sem lacinia mollis.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque a accumsan arcu. Proin eu efficitur risus.
                        Maecenas finibus porttitor orci sit amet mollis. Duis
                        libero ipsum, volutpat et feugiat id, vestibulum at est.
                        Sed faucibus ex eu erat malesuada, in ultricies lorem
                        tristique. Cras molestie ligula vel turpis sagittis
                        varius. Cras sem ex, rhoncus eget nisi sit amet,
                        molestie consectetur diam. Pellentesque posuere velit
                        lectus, in tristique sapien facilisis vitae. Ut velit
                        risus, viverra sed facilisis ut, ultricies vel ligula.
                      </p>
                      <p>
                        Proin porta diam a orci pharetra auctor. Fusce ultrices
                        nunc ut bibendum feugiat. Aliquam quis rhoncus nisi, sed
                        auctor mi. Ut suscipit urna lectus, facilisis pretium mi
                        suscipit in. Aliquam mattis purus ut porttitor
                        tincidunt. Fusce vel felis quis diam elementum fringilla
                        ut euismod velit. Vestibulum eu gravida augue. Nulla
                        varius metus ac est ultricies, sed euismod velit
                        maximus. Sed at consectetur nisi, sed convallis purus.
                        Donec luctus bibendum placerat. Praesent eu lorem
                        sodales, dignissim diam in, dignissim leo. Phasellus
                        egestas aliquam diam, posuere tristique velit ultrices
                        eget. Suspendisse efficitur nec odio et consequat. Sed
                        id leo nec sem lacinia mollis.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque a accumsan arcu. Proin eu efficitur risus.
                        Maecenas finibus porttitor orci sit amet mollis. Duis
                        libero ipsum, volutpat et feugiat id, vestibulum at est.
                        Sed faucibus ex eu erat malesuada, in ultricies lorem
                        tristique. Cras molestie ligula vel turpis sagittis
                        varius. Cras sem ex, rhoncus eget nisi sit amet,
                        molestie consectetur diam. Pellentesque posuere velit
                        lectus, in tristique sapien facilisis vitae. Ut velit
                        risus, viverra sed facilisis ut, ultricies vel ligula.
                      </p>
                      <p>
                        Proin porta diam a orci pharetra auctor. Fusce ultrices
                        nunc ut bibendum feugiat. Aliquam quis rhoncus nisi, sed
                        auctor mi. Ut suscipit urna lectus, facilisis pretium mi
                        suscipit in. Aliquam mattis purus ut porttitor
                        tincidunt. Fusce vel felis quis diam elementum fringilla
                        ut euismod velit. Vestibulum eu gravida augue. Nulla
                        varius metus ac est ultricies, sed euismod velit
                        maximus. Sed at consectetur nisi, sed convallis purus.
                        Donec luctus bibendum placerat. Praesent eu lorem
                        sodales, dignissim diam in, dignissim leo. Phasellus
                        egestas aliquam diam, posuere tristique velit ultrices
                        eget. Suspendisse efficitur nec odio et consequat. Sed
                        id leo nec sem lacinia mollis.
                      </p>

                      <p
                        className="detail__desc__more"
                        onClick={this.onShowMore}
                      >
                        {this.state.showMore ? 'View less' : 'View more'}
                      </p>
                    </div>
                  </div> */}

                  <div className="col-md-12">
                    <div className="product">
                      <div className="row__header">
                        <span className="product__category-big">
                          <Tooltip
                            placement="right"
                            autoAdjustOverflow="true"
                            title="Lowest ask are the products listed width the lowest ask"
                          >
                            Related Product
                            <FontAwesomeIcon
                              icon={faInfoCircle}
                              className="product__info"
                            />
                          </Tooltip>
                        </span>
                        {/* <Link className="see__all">See all </Link> */}
                      </div>
                      <Product
                        data={detail.dataDetail.relatedProducts}
                        title={'Related Product'}
                      />
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
  detail: state.detailReducer
});
export default connect(
  mapStateToProps,
  {
    ...actions
  }
)(Detail);
