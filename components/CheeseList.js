/* @flow */
import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableHighlight,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Cheese from "./Cheese";

export default class CheeseList extends Component {
  redirectToCheese(cheese){
    Actions.cheese({
      title: cheese.name,
      cheese: cheese
    });
  }

  renderCheese(key){
    var cheese = this.props.cheeses[key];

    return (
      <TouchableHighlight key={key} style={styles.cheese} onPress={this.redirectToCheese.bind(this, cheese)}>
        <View>
          <Cheese cheese={cheese} />
        </View>
      </TouchableHighlight>
    );
  }

  render () {
    return (
      <View style={styles.container}>
        {Object.keys(this.props.cheeses).map(this.renderCheese.bind(this))}
      </View>
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
