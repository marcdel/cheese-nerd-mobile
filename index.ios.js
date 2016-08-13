/* @flow */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import HomeApp from "./containers/HomeApp";
import Cheese from "./components/Cheese";

class Index extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={HomeApp} title="Home" initial={true} />
          <Scene key="cheese" component={Cheese} />
        </Scene>
      </Router>
    );
  }
}

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
