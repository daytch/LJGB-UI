import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../components/layouts/common/breadcrumb';

import { Select } from 'antd';
const { Option } = Select;

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    };
    this.onShowMore = this.onShowMore.bind(this);
  }
  onShowMore() {
    this.setState({
      showMore: !this.state.showMore
    });
  }
  render() {
    return (
      <main role="main">
        <div className="container">
          <BreadCrumb />

          <div className="detail">
            <div className="detail__header">
              <div className="row">
                <div className="col-md-12">
                  <h1>Car M5 Grand Turismo</h1>
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
                <div className="detail__select">
                  <Select
                    showSearch
                    placeholder="Select"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="jack">select A</Option>
                    <Option value="lucy">select B</Option>
                    <Option value="tom">select C</Option>
                  </Select>
                </div>
                <div className="bid">
                  <button>Bid</button>
                </div>
              </div>
            </div>

            <div className="detail__body">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="detail__body__img">
                    <img
                      src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/911-road-3629a.jpg?itok=m6x23Go0"
                      alt=""
                      className=""
                      style={{ width: '100%' }}
                    />
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

export default Detail;
