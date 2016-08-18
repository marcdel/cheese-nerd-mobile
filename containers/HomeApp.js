/* @flow */
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, } from 'react-native';
import { connect } from 'react-redux';
import Tabs from 'react-native-tabs';

import Home from "../components/Home";

class HomeApp extends Component {
  constructor(){
    super();

    this.state = {
      cheeses: require('../sample-cheeses'),
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

  onHomePressed() {
    this.setState({page:"home"});
    Actions.home({type: "reset"});
  }

  onSearchPressed() {
    // this.setState({page:"search"});
    // Actions.search({type: "reset"});
  }

  render() {
    const { page } = this.state;

    console.log(this.props.routes.scene);
    return (
      <View style={styles.container}>
        <Tabs
          selected={page}
          style={styles.tabs}
          selectedStyle={{color:'red'}}>
            <Text name="home" onPress={()=>Actions.home({type: "reset"})}>Home</Text>
            <Text name="search" onPress={this.onSearchPressed.bind(this)}>Search</Text>
        </Tabs>
        <ScrollView style={styles.scrollView}>
          <Home cheeses={this.state.cheeses} topCheeseFilter={this.topCheeseFilter.bind(this)} />
        </ScrollView>
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

export default connect(({routes}) => ({routes}))(HomeApp);
