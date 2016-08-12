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
      <View key={key} style={styles.cheese}>
        <Cheese cheese={cheese} />
      </View>
    );
  }

  render () {
    return (
      <ScrollView>
        <View style={styles.container}>
          {Object.keys(this.props.cheeses).map(this.renderCheese.bind(this))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cheese: {
    flex: 1,
    marginTop: 20
  }
});

CheeseList.propTypes = {
  cheeses: React.PropTypes.object.isRequired
};
