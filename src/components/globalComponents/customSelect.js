import React, { Component } from 'react';
import { Select } from 'antd';
const Option = Select.Option;

export default class CustomSelect extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.value !== nextProps.value) {
      return true;
    }
    if (this.props.disable !== nextProps.disable) {
      return true;
    }
    if (this.props.data !== nextProps.data) {
      return true;
    }
    if (this.props.defaultValue !== nextProps.defaultValue) {
      return true;
    }
    if (this.props.name !== nextProps.name) {
      return true;
    }
    if (this.props.form !== nextProps.form) {
      return true;
    }
    if (this.props.placeholder !== nextProps.placeholder) {
      return true;
    }
    return false;
  }

  render() {
    let {
      value,
      data,
      disable,
      defaultValue,
      onChange,
      name,
      form,
      mode,
      placeholder,
      allowClear
    } = this.props;
    return (
      <Select
        showSearch
        allowClear={allowClear == undefined ? false : true}
        mode={mode == undefined ? 'single' : 'multiple'}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={event => {
          onChange(form, name, event);
        }}
        value={value}
        disabled={disable === undefined || disable === false ? false : true}
        style={{ width: '100%', paddingRight: '10px' }}
      >
        {(data !== undefined ? data : []).map((x, index) => {
          return (
            <Option key={index} value={x.id}>
              {x.text}
            </Option>
          );
        })}
      </Select>
    );
  }
}
