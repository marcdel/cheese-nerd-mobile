/* @flow */
import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  View
} from 'react-native';

import Cheese from "./Cheese";

export default class CheeseList extends Component {
  renderCheese(key){
    var cheese = this.props.cheeses[key];

    return (
      <View key={key}>
        <Cheese cheese={cheese} />
      </View>
    );
  }

  render () {
    return (
      <ScrollView style={styles.container}>
          {Object.keys(this.props.cheeses).map(this.renderCheese.bind(this))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  cheese: {
    flex: 1
  }
});

CheeseList.propTypes = {
  cheeses: React.PropTypes.object.isRequired
};
