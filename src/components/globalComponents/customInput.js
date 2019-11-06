import React, { Component } from 'react';
import { Input } from 'antd';

export default class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validateStatus: ''
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.value !== nextProps.value) {
      return true;
    }
    if (this.props.name !== nextProps.name) {
      return true;
    }
    if (this.props.form !== nextProps.form) {
      return true;
    }
    if (this.props.subForm !== nextProps.subForm) {
      return true;
    }
    if (this.props.disable !== nextProps.disable) {
      return true;
    }
    if (this.state.validateStatus !== nextState.validateStatus) {
      return true;
    }
    return false;
  }

  render() {
    let {
      value,
      disable,
      placeholder,
      onChange,
      style,
      name,
      form,
      subForm,
      pattern,
      onClick,
      size,
      password,
      className,
      subSubForm,
      onBlur,
      onKeyPress
    } = this.props;
    return (
      <Input
        placeholder={placeholder}
        className={className}
        style={style}
        onChange={event => {
          onChange(form, name, event.target.value, subForm, subSubForm);
        }}
        value={value}
        disabled={disable === undefined || disable === false ? false : true}
        size={size === undefined ? 'default' : size}
        type={password === undefined ? 'text' : 'password'}
        pattern={pattern}
        onClick={onClick}
        onBlur={event => {
          if (name === 'nomorfaktur' || name === 'noFakturMon') {
            onBlur(form, name, event.target.value, subForm, subSubForm);
          }
        }}
        onKeyPress={onKeyPress}
      />
    );
  }
}
