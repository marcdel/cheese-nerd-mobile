/* @flow */
import React, { Component } from "react";
import {
  View,
  Image,
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

const styles = StyleSheet.create({ });
