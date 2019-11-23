import React, { Component } from 'react';
import { Table } from 'antd';

class Tracking extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
        dataIndex: 'key',
        key: 'key',
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
        key: 'date'
      }
    ];
    return (
      <div>
        <h3>Tracking</h3>
        <Table columns={columns} dataSource={dataSource} pagination={false} />
      </div>
    );
  }
}

export default Tracking;
