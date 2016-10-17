/* @flow */
import React, { Component, Image } from "react";
import {
  StyleSheet,
} from 'react-native';

import {
  Title,
} from 'native-base';

export default class TitleBar extends Component {
  constructor() {
    super();
  }

  render () {
    const tab = this.props.tab;
    
    return (
      <Title>
        { tab === 'search' && 'Search' }
        { tab === 'myBoard' && 'My Board' }
        { tab === 'add' && 'Add' }
        { tab === 'promo' && 'Promo' }
        { tab === 'account' && 'Account' }
      </Title>
    );
  }
}

TitleBar.propTypes = {
  tab: React.PropTypes.string.isRequired
};
