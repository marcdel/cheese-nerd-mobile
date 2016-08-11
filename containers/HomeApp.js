/* @flow */
import React, { Component } from "react";
import { View } from 'react-native';

import Home from "../components/Home";

export default class HomeApp extends Component {
  constructor(){
    super();

    this.state = {
      cheeses: require('../sample-cheeses')
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

  render() {
    return (
        <Home cheeses={this.state.cheeses} topCheeseFilter={this.topCheeseFilter.bind(this)} />
    );
  }
}

Home.propTypes = {
  cheeses: React.PropTypes.object.isRequired,
  topCheeseFilter: React.PropTypes.func.isRequired
};
