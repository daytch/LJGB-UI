import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const BreadCrumb = breadName => {
  console.log(breadName);
  return (
    <Breadcrumb style={{ padding: '20px 0' }}>
      <Breadcrumb.Item>
        <Link to="/">Home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>Detail</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumb;
