/* @flow */
import React, { Component } from "react";

import MyBoard from '../containers/MyBoard';
import Search from '../containers/Search';
import Add from '../containers/Add';
import Account from '../containers/Account';

export default class ComponentTemplate extends Component {
  constructor() {
    super();
  }

  render () {
    const { tab } = this.props;

    switch(tab) {
      case 'myBoard':
        return (<MyBoard />);
      case 'add':
        return (<Add />);
      case 'account':
        return (<Account />);
    }
  }
}

ComponentTemplate.propTypes = {
  tab: React.PropTypes.string.isRequired,
};
