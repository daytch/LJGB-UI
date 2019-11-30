import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';
import { actions } from '../../actions/profileAction';
import BlockUi from 'react-block-ui';
import '../../style/component/select.scss';
import moment from 'moment';
import { Loader, Types } from 'react-loaders';

class Tracking extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.getDataTrx();
  }
  render() {
    const { profile } = this.props;
    const dataSource = [
      {
        key: '1',
        produk: 'Mike',
        price: '999999',
        status: 'Bid',
        date: '25 November 2019'
      },
      {
        key: '2',
        produk: 'Mike',
        price: '999999',
        status: 'Bid',
        date: '25 November 2019'
      }
    ];

    const columns = [
      {
        title: 'no',
        dataIndex: 'no',
        key: 'no',
        width: 80
      },
      {
        title: 'produk',
        dataIndex: 'produk',
        key: 'produk'
      },
      {
        title: 'price',
        dataIndex: 'price',
        key: 'price'
      },
      {
        title: 'status',
        dataIndex: 'status',
        key: 'status'
      },
      {
        title: 'date',
        dataIndex: 'date',
        key: 'date',
        render: (record, data) => {
          let tempdate =
            data.date == ''
              ? ''
              : moment(data.date)
                  .format('DD-MM-YYYY')
                  .toString();
          return tempdate;
        }
      }
    ];
    return (
      <BlockUi
        tag="div"
        blocking={profile.isLoading}
        style={{ width: '100%' }}
        message={<h3>Loading, please wait</h3>}
        loader={<Loader active type="ball-pulse-sync" color="#061b56" />}
      >
        <div>
          <h3>Tracking</h3>
          <Table
            columns={columns}
            dataSource={profile.trx}
            pagination={false}
          />
        </div>
      </BlockUi>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profileReducer
});
export default connect(
  mapStateToProps,
  {
    ...actions
  }
)(Tracking);
