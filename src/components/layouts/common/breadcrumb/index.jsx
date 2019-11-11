import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const BreadCrumb = () => {
  return (
    <Breadcrumb style={{ padding: '20px 0' }}>
      <Breadcrumb.Item>
        <Link to="/">Home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to="/">Car</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to="/">Sport</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>CAR M5 GRAN TURISMO</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumb;
