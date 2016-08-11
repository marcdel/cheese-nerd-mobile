/* @flow */
import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Cheese from "./Cheese";

export default class CheeseList extends Component {
  renderCheese(key){
    var cheese = this.props.cheeses[key];

    return (
      <View key={key}>
        <Cheese cheese={cheese} />
      </ View>
    );
  }

  render () {
    return (
      <View>
          {Object.keys(this.props.cheeses).map(this.renderCheese.bind(this))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

CheeseList.propTypes = {
  cheeses: React.PropTypes.object.isRequired
};
