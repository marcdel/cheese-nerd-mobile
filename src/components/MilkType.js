/* @flow */
import React, { Component, Image } from "react";
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  Picker,
  Button,
} from 'native-base';

export default class MilkType extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View>
        <Text>Milk Type</Text>
        <Button style={styles.container}>
          <Picker style={styles.picker}
            selectedValue={this.props.selectedValue}
            onValueChange={this.props.onChange}>
            <Picker.Item label="Select Milk Type" value="" />
            <Picker.Item label="Cow" value="Cow" />
            <Picker.Item label="Sheep" value="Sheep" />
            <Picker.Item label="Goat" value="Goat" />
            <Picker.Item label="Buffalo" value="Buffalo" />
          </Picker>
        </Button>
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
    height: 50,
  },
  picker: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }
});
