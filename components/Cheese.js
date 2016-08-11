/* @flow */
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Cheese extends Component {
  render () {
    var cheese = this.props.cheese;

    return (
      <View>
        <Text>
          {cheese.name}
        </Text>
        <Image style={styles.image} source={{uri: cheese.image}} />
        <Text>{cheese.desc}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 300
  },
});

Cheese.propTypes = {
  cheese: React.PropTypes.object.isRequired
};
