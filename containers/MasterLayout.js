/* @flow */
import React, { Component } from "react";
import { Router, Scene } from 'react-native-router-flux';
import Tabs from 'react-native-tabs';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
} from 'react-native';


import HomeApp from "./HomeApp";
import Cheese from "../components/Cheese";

export default class MasterLayout extends Component {
  constructor(){
    super();

    this.state = {
      cheeses: require('../sample-cheeses'),
      page: 'home',
    };
  }

  tabSelected(element) {
    this.setState({page:element.props.name});
  }

  render() {
    const { page } = this.state;

    return (
      <View style={styles.container}>
        <Tabs
          selected={page}
          style={styles.tabs}
          selectedStyle={{color:'red'}} onSelect={el=>this.tabSelected(el)}>
            <Text name="home">Home</Text>
            <Text name="search">Search</Text>
        </Tabs>
        <View style={styles.scrollView}>
          <Router>
            <Scene key="root">
              <Scene key="home" component={HomeApp} title="Home" initial={true} />
              <Scene key="cheese" component={Cheese} />
            </Scene>
          </Router>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 665
  },
  scrollView: {
    height: 625
  },
  tabs: {
    backgroundColor:'white',
    height: 40,
    borderTopColor: 'red',
    borderTopWidth: 2,
  },
});
