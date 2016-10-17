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

  render () {
    return (
      <FooterTab>
        <Button onPress={() => this.props.tabChanged('myBoard')} transparent>My Board<Icon name='ios-restaurant' /></Button>
        <Button onPress={() => this.props.tabChanged('search')} transparent>Search<Icon name='ios-search' /></Button>
        <Button onPress={() => this.props.tabChanged('add')} transparent>Add<Icon name='ios-add-circle' /></Button>
        <Button onPress={() => this.props.tabChanged('promo')} transparent>Promo<Icon name='ios-ribbon' /></Button>
        <Button onPress={() => this.props.tabChanged('account')} transparent>Account<Icon name='ios-person' /></Button>
      </FooterTab>
    );
  }
}

BottomNav.propTypes = {
  tab: React.PropTypes.string.isRequired,
  tabChanged: React.PropTypes.func.isRequired,
};
