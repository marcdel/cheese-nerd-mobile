/* @flow */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HomeApp from "./containers/HomeApp";

class CheeseNerdMobile extends Component {
  render() {
    return (
      <HomeApp />
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('CheeseNerdMobile', () => CheeseNerdMobile);
