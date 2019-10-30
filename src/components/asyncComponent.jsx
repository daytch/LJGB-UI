// filename: asyncComponent.jsx
import React, { Component } from 'react';

const asyncComponent = getComponent => {
  // return AsyncComponent class component
  return class AsyncComponent extends Component {
    // eslint-disable-next-line react/sort-comp
    static Component = null;

    // eslint-disable-next-line react/state-in-constructor
    state = {
      Component: AsyncComponent.Component // first time similar to static Component = null
    };

    // eslint-disable-next-line camelcase
    UNSAFE_componentWillMount() {
      // eslint-disable-next-line react/destructuring-assignment
      if (!this.state.Component) {
        // if this.state.Component is true value then getComponent promise resolve with .then() method
        // For simplicity, I haven't caught an error, but you can catch any errors or show loading bar or animation to user etc.
        // eslint-disable-next-line no-shadow
        getComponent().then(({ default: Component }) => {
          AsyncComponent.Component = Component;
          this.setState({ Component }); // update this.state.Component
        });
      }
    }

    render() {
      // eslint-disable-next-line no-shadow
      const { Component } = this.state; // destructing Component from this.state
      if (Component) {
        // if Component is truthy value then return Component with props
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <Component {...this.props} />;
      }
      return null;
    }
  };
};

export default asyncComponent;
