/* @flow */
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
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
    marginTop: 20,
    flex: 1,
  },
});

Home.propTypes = {
  cheeses: React.PropTypes.object.isRequired,
  topCheeseFilter: React.PropTypes.func.isRequired
};
