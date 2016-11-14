/* @flow */
import React, { Component, Image } from "react";
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  Picker,
} from 'native-base';

export default class MilkType extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View>
        <Text>Milk Type</Text>
        <View style={styles.container}>
          <Picker
            selectedValue={this.props.selectedValue}
            onValueChange={this.props.onChange}>
            <Picker.Item label="Select Milk Type" value="" />
            <Picker.Item label="Cow" value="Cow" />
            <Picker.Item label="Sheep" value="Sheep" />
            <Picker.Item label="Goat" value="Goat" />
            <Picker.Item label="Buffalo" value="Buffalo" />
          </Picker>
        </View>
      </View>
    );
  }
}

MilkType.propTypes = {
  selectedValue: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#ddd"
  }
});
