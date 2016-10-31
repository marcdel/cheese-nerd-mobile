/* @flow */
import React, { Component } from "react";
import {
  View,
  StyleSheet,
} from 'react-native';

import MyBoard from '../containers/MyBoard';
import Search from '../containers/Search';
import Add from '../containers/Add';
import Promo from '../containers/Promo';
import Account from '../containers/Account';

export default class ComponentTemplate extends Component {
  constructor() {
    super();
  }

  getContent (tab) {
    switch(tab) {
      case 'myBoard':
        return (<MyBoard reviews={this.props.reviews} />);
      case 'search':
        return (<Search cheeses={this.props.cheeses} />);
      case 'add':
        return (<Add />);
      case 'promo':
        return (<Promo />);
      case 'account':
        return (<Account />);
    }
  }

  render () {
    const { tab } = this.props;

    return this.getContent(tab);
  }
}

ComponentTemplate.propTypes = {
  tab: React.PropTypes.string.isRequired,
  cheeses: React.PropTypes.object.isRequired,
  reviews: React.PropTypes.object.isRequired,
};
