/* @flow */
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Tabs from 'react-native-tabs';

import Home from "../components/Home";

export default class HomeApp extends Component {
  constructor(){
    super();

    this.state = {
      cheeses: require('../sample-cheeses'),
      page: 'home',
    };
  }

  topCheeseFilter() {
    var cheeses = this.state.cheeses;
    return Object.keys(cheeses).sort(function(a, b){
      a = cheeses[a].rating;
      b = cheeses[b].rating;
      return ((a > b) ? -1 : ((a < b) ? 1 : 0));
    }).slice(0, 4).reduce(function(result, key){
      result[key] = cheeses[key];
      return result;
    }, {});
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
          <Home cheeses={this.state.cheeses} topCheeseFilter={this.topCheeseFilter.bind(this)} />
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

Home.propTypes = {
  cheeses: React.PropTypes.object.isRequired,
  topCheeseFilter: React.PropTypes.func.isRequired
};
