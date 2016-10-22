/* @flow */
import React, { Component } from "react";
import {
  StyleSheet,
} from 'react-native';

import {
  Footer,
  FooterTab,
  Button,
  Icon
} from 'native-base';

export default class BottomNav extends Component {
  constructor() {
    super();
  }

  button(name, text, icon) {
    const tab = this.props.tab;
    const active = name === tab;
    const inactiveIcon = icon + '-outline';

    return (
      <Button active={active} onPress={() => this.props.tabChanged(name)}>
        <Icon name={active ? icon : inactiveIcon} />
      </Button>
    );
  }

  render () {
    const tab = this.props.tab;

    return (
      <FooterTab theme={theme.tabs}>
        {this.button('myBoard', 'My Board', 'ios-restaurant')}
        {this.button('search', 'Search', 'ios-search')}
        {this.button('add', 'Add', 'ios-add-circle')}
        {this.button('promo', 'Promo', 'ios-ribbon')}
        {this.button('account', 'Account', 'ios-person')}
      </FooterTab>
    );
  }
}

const theme = {
  tabs: {
    tabActiveBgColor: 'transparent',
    tabBarActiveTextColor: '#3498db'
  }
};

BottomNav.propTypes = {
  tab: React.PropTypes.string.isRequired,
  tabChanged: React.PropTypes.func.isRequired,
};
