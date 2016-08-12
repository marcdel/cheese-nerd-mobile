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
    let cheese = this.props.cheese;
    let imageSource = {
      uri: cheese.image
    };

    console.log(imageSource);

    return (
      <View>
        <Text>
          {cheese.name}
        </Text>
        <Image style={styles.image} source={require('../images/Beemster-Classic.jpg')} />
        <Text>{cheese.desc}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 375,
    width: 375
  },
});

Cheese.propTypes = {
  cheese: React.PropTypes.object.isRequired
};
