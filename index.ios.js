/* @flow */
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import MasterLayout from "./containers/MasterLayout";

class CheeseNerdMobile extends Component {
  render() {
    return (
      <MasterLayout />
    );
  }
}

AppRegistry.registerComponent('CheeseNerdMobile', () => CheeseNerdMobile);
