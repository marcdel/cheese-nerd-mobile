/* @flow */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';

import Index from "./index";

class CheeseNerdMobile extends Component {
  render() {
    return (
      <Index />
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('CheeseNerdMobile', () => CheeseNerdMobile);
