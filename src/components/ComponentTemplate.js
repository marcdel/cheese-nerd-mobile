/* @flow */
import React, { Component, Image } from "react";
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class ComponentTemplate extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <View>
        <Text>ComponentTemplate</Text>
      </View>
    );
  }
}

ComponentTemplate.propTypes = {
};
