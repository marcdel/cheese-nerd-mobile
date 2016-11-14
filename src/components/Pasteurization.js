/* @flow */
import React, { Component, Image } from "react";
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  Button,
} from 'native-base';

export default class Pasteurization extends Component {
  constructor(props) {
    super(props);

    this.isSelected = this.isSelected.bind(this);
  }

  isSelected(button) {
    return this.props.selected === button;
  }

  render () {
    return (
      <View>
        <Text>Pasteurization</Text>
        <View style={styles.buttonContainer}>
          <Button bordered={!this.isSelected("Pasteurized")} onPress={() => this.props.onChange("Pasteurized")}
                  rounded style={[styles.button, styles.first]}>Pasteurized</Button>
          <Button bordered={!this.isSelected("Raw")}  onPress={() => this.props.onChange("Raw")}
                  rounded style={styles.button}>Raw</Button>
        </View>
      </View>
    );
  }
}

Pasteurization.propTypes = {
  selected: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height:   50,
    marginTop: 20,
  },
  first: {
    marginRight: 10,
  },
  button: {
    width: 120,
  },
});
