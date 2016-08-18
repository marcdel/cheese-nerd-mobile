/* @flow */
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import CheeseList from './CheeseList';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Top Cheeses</Text>
        <CheeseList cheeses={this.props.topCheeseFilter()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

Home.propTypes = {
  cheeses: React.PropTypes.object.isRequired,
  topCheeseFilter: React.PropTypes.func.isRequired
};
