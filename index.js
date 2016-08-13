/* @flow */
import React, { Component } from "react";
import { Router, Scene } from 'react-native-router-flux';

import HomeApp from "./containers/HomeApp";
import Cheese from "./components/Cheese";

export default class Index extends Component {
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
