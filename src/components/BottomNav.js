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

import theme from '../../Themes/light';

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
        {text} <Icon name={active ? icon : inactiveIcon} />
      </Button>
    );
  }

  render () {
    const tab = this.props.tab;
    const customTheme = {
      ...theme,
      tabActiveBgColor: 'transparent',
    };

    return (
      <FooterTab theme={customTheme}>
        {this.button('myBoard', 'My Board', 'ios-restaurant')}
        {this.button('add', 'Add', 'ios-add-circle')}
        {this.button('account', 'Account', 'ios-person')}
      </FooterTab>
    );
  }
}

BottomNav.propTypes = {
  tab: React.PropTypes.string.isRequired,
  tabChanged: React.PropTypes.func.isRequired,
};
