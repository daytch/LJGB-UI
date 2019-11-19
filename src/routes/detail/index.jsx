import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Select, Modal, Table, Icon } from 'antd';
import { Carousel } from 'react-bootstrap';

import $ from 'jquery';
import Slider from 'react-slick';
import BreadCrumb from '../../components/layouts/common/breadcrumb';

import Img1 from './../../images/color/black.jpeg';
import Img2 from './../../images/color/black2.jpeg';
import Img3 from './../../images/color/red.jpeg';
import Img4 from './../../images/color/silver.jpeg';
import Img5 from './../../images/color/white.jpeg';
import Img6 from './../../images/color/yellow.jpeg';
import Gambar from '../../images/car.png';
import Gambar2 from '../../images/images.jpg';
import { connect } from 'react-redux';
import { actions } from '../../actions/detailAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronUp,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

const { Option } = Select;

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      allAsk: false,
      allBid: false,
      allBid: false,
      visibleAsk: false,
      nav1: null,
      nav2: null
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
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
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
        title: 'Rank',
        dataIndex: 'rank',
        key: 'rank'
      },
      {
        title: 'Price',
        dataIndex: 'price',
        ke: 'price'
      }
    ];

    const { detail } = this.props;
    console.log(detail);
    return (
      <main role="main">
        <div className="container">
          <BreadCrumb />

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
                        Lorem ipsum: <span>dolor sit</span>
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
                  <button className="btn btn-success">
                    <div className="bid__text left">
                      <span className="bid__text--big">
                        {this.numberWithCommas(
                          detail.dataDetail.carDetail.lowestask
                        )}
                      </span>
                      <span className="bid__text--small">Lowest Ask</span>
                    </div>
                    <div className="bid__text right">
                      <span className="bid__text--big">Buy</span>
                      <span className="bid__text--small">or Bid</span>
                    </div>
                  </button>
                  <a onClick={this.showAllAsk}>View All Asks</a>
                  <Modal
                    title="All Asks"
                    visible={this.state.visibleAsk}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                  >
                    <Table dataSource={detail.dataAllAsk} columns={columns} />
                  </Modal>
                </div>
                <div className="bid right">
                  <button className="btn btn-danger">
                    <div className="bid__text left">
                      <span className="bid__text--big">
                        {this.numberWithCommas(
                          detail.dataDetail.carDetail.highestbid
                        )}
                      </span>
                      <span className="bid__text--small">Highest Bid</span>
                    </div>
                    <div className="bid__text right">
                      <span className="bid__text--big">Sell</span>
                      <span className="bid__text--small">or Ask</span>
                    </div>
                  </button>
                  <a onClick={this.showAllBid}>View All Bids</a>
                  <Modal
                    title="All Bids"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                  >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                  </Modal>
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
                        >
                          <div>
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
                          </div>
                        </Slider>
                      </div>
                    </div>
                    <div className="col-3">
                      <Slider
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        slidesToShow={3}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        className="slideTrigger"
                        {...settings}
                      >
                        <div>
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
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
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
                      {/* {detail.dataDetail.carDetail.description} */}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque a accumsan arcu. Proin eu efficitur risus.
                      Maecenas finibus porttitor orci sit amet mollis. Duis
                      libero ipsum, volutpat et feugiat id, vestibulum at est.
                      Sed faucibus ex eu erat malesuada, in ultricies lorem
                      tristique. Cras molestie ligula vel turpis sagittis
                      varius. Cras sem ex, rhoncus eget nisi sit amet, molestie
                      consectetur diam. Pellentesque posuere velit lectus, in
                      tristique sapien facilisis vitae. Ut velit risus, viverra
                      sed facilisis ut, ultricies vel ligula.
                    </p>
                    <p>
                      Proin porta diam a orci pharetra auctor. Fusce ultrices
                      nunc ut bibendum feugiat. Aliquam quis rhoncus nisi, sed
                      auctor mi. Ut suscipit urna lectus, facilisis pretium mi
                      suscipit in. Aliquam mattis purus ut porttitor tincidunt.
                      Fusce vel felis quis diam elementum fringilla ut euismod
                      velit. Vestibulum eu gravida augue. Nulla varius metus ac
                      est ultricies, sed euismod velit maximus. Sed at
                      consectetur nisi, sed convallis purus. Donec luctus
                      bibendum placerat. Praesent eu lorem sodales, dignissim
                      diam in, dignissim leo. Phasellus egestas aliquam diam,
                      posuere tristique velit ultrices eget. Suspendisse
                      efficitur nec odio et consequat. Sed id leo nec sem
                      lacinia mollis.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque a accumsan arcu. Proin eu efficitur risus.
                      Maecenas finibus porttitor orci sit amet mollis. Duis
                      libero ipsum, volutpat et feugiat id, vestibulum at est.
                      Sed faucibus ex eu erat malesuada, in ultricies lorem
                      tristique. Cras molestie ligula vel turpis sagittis
                      varius. Cras sem ex, rhoncus eget nisi sit amet, molestie
                      consectetur diam. Pellentesque posuere velit lectus, in
                      tristique sapien facilisis vitae. Ut velit risus, viverra
                      sed facilisis ut, ultricies vel ligula.
                    </p>
                    <p>
                      Proin porta diam a orci pharetra auctor. Fusce ultrices
                      nunc ut bibendum feugiat. Aliquam quis rhoncus nisi, sed
                      auctor mi. Ut suscipit urna lectus, facilisis pretium mi
                      suscipit in. Aliquam mattis purus ut porttitor tincidunt.
                      Fusce vel felis quis diam elementum fringilla ut euismod
                      velit. Vestibulum eu gravida augue. Nulla varius metus ac
                      est ultricies, sed euismod velit maximus. Sed at
                      consectetur nisi, sed convallis purus. Donec luctus
                      bibendum placerat. Praesent eu lorem sodales, dignissim
                      diam in, dignissim leo. Phasellus egestas aliquam diam,
                      posuere tristique velit ultrices eget. Suspendisse
                      efficitur nec odio et consequat. Sed id leo nec sem
                      lacinia mollis.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque a accumsan arcu. Proin eu efficitur risus.
                      Maecenas finibus porttitor orci sit amet mollis. Duis
                      libero ipsum, volutpat et feugiat id, vestibulum at est.
                      Sed faucibus ex eu erat malesuada, in ultricies lorem
                      tristique. Cras molestie ligula vel turpis sagittis
                      varius. Cras sem ex, rhoncus eget nisi sit amet, molestie
                      consectetur diam. Pellentesque posuere velit lectus, in
                      tristique sapien facilisis vitae. Ut velit risus, viverra
                      sed facilisis ut, ultricies vel ligula.
                    </p>
                    <p>
                      Proin porta diam a orci pharetra auctor. Fusce ultrices
                      nunc ut bibendum feugiat. Aliquam quis rhoncus nisi, sed
                      auctor mi. Ut suscipit urna lectus, facilisis pretium mi
                      suscipit in. Aliquam mattis purus ut porttitor tincidunt.
                      Fusce vel felis quis diam elementum fringilla ut euismod
                      velit. Vestibulum eu gravida augue. Nulla varius metus ac
                      est ultricies, sed euismod velit maximus. Sed at
                      consectetur nisi, sed convallis purus. Donec luctus
                      bibendum placerat. Praesent eu lorem sodales, dignissim
                      diam in, dignissim leo. Phasellus egestas aliquam diam,
                      posuere tristique velit ultrices eget. Suspendisse
                      efficitur nec odio et consequat. Sed id leo nec sem
                      lacinia mollis.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque a accumsan arcu. Proin eu efficitur risus.
                      Maecenas finibus porttitor orci sit amet mollis. Duis
                      libero ipsum, volutpat et feugiat id, vestibulum at est.
                      Sed faucibus ex eu erat malesuada, in ultricies lorem
                      tristique. Cras molestie ligula vel turpis sagittis
                      varius. Cras sem ex, rhoncus eget nisi sit amet, molestie
                      consectetur diam. Pellentesque posuere velit lectus, in
                      tristique sapien facilisis vitae. Ut velit risus, viverra
                      sed facilisis ut, ultricies vel ligula.
                    </p>
                    <p>
                      Proin porta diam a orci pharetra auctor. Fusce ultrices
                      nunc ut bibendum feugiat. Aliquam quis rhoncus nisi, sed
                      auctor mi. Ut suscipit urna lectus, facilisis pretium mi
                      suscipit in. Aliquam mattis purus ut porttitor tincidunt.
                      Fusce vel felis quis diam elementum fringilla ut euismod
                      velit. Vestibulum eu gravida augue. Nulla varius metus ac
                      est ultricies, sed euismod velit maximus. Sed at
                      consectetur nisi, sed convallis purus. Donec luctus
                      bibendum placerat. Praesent eu lorem sodales, dignissim
                      diam in, dignissim leo. Phasellus egestas aliquam diam,
                      posuere tristique velit ultrices eget. Suspendisse
                      efficitur nec odio et consequat. Sed id leo nec sem
                      lacinia mollis.
                    </p>

                    <p className="detail__desc__more" onClick={this.onShowMore}>
                      {this.state.showMore ? 'View less' : 'View more'}
                    </p>
                  </div>
                </div>

                {/* <div className="col-md-12">
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
                      <Link className="see__all">See all </Link>
                    </div>
                    <Product data={home.dataHome.lowestAsks} title={'Lowest Ask'} />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
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
