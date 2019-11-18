import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Select, Modal, Table } from 'antd';
import { Carousel } from 'react-bootstrap';

import $ from 'jquery';
import BreadCrumb from '../../components/layouts/common/breadcrumb';

import Gambar from '../../images/car.png';
import Gambar2 from '../../images/images.jpg';
import { connect } from 'react-redux';
import { actions } from '../../actions/detailAction';

const { Option } = Select;

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      allAsk: false,
      allBid: false,
      allBid: false,
      visibleAsk: false
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

  numberWithCommas(x) {
    let str = x === null || x === '' ? '' : x.toString();
    if (str !== '' && str.length >= 7) {
      str = str.substring(0, str.length - 6);
      str = str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      return str + ' JT';
    }
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
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
    return (
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
                        Year: <span>{detail.dataDetail.carDetail.year}</span>
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
                    <Table dataSource={detail.dataAllBid} columns={columns} />
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
                        <Carousel fade="true">
                          <Carousel.Item>
                            <img
                              src={Gambar}
                              alt=""
                              className=""
                              style={{ height: '410px' }}
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              src={Gambar2}
                              alt=""
                              className=""
                              style={{ height: '410px' }}
                            />
                          </Carousel.Item>
                        </Carousel>
                      </div>
                    </div>
                    <div className="col-3">triggernya</div>
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
