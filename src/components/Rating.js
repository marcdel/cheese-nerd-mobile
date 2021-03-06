/* @flow */
import React, { Component, Image } from "react";
import {
  View,
  StyleSheet,
} from 'react-native';

import {
  Icon,
  Grid,
  Col
} from 'native-base';

export default class Rating extends Component {
  constructor() {
    super();
  }

  rate(rating) {
    const { editable, ratingChanged } = this.props;

    if (editable && ratingChanged) {
      ratingChanged(rating);
    }
  }

  iconName(rating, iconRating) {
    return rating >= iconRating ? 'ios-star' : 'ios-star-outline';
  }

  render () {
    const { rating, editable } = this.props;

    return (
      <View style={styles.container}>
        <View>
          <Grid>
            <Col><Icon style={styles.icon} onPress={() => this.rate(1)} name={this.iconName(rating, 1)} /></Col>
            <Col><Icon style={styles.icon} onPress={() => this.rate(2)} name={this.iconName(rating, 2)} /></Col>
            <Col><Icon style={styles.icon} onPress={() => this.rate(3)} name={this.iconName(rating, 3)} /></Col>
            <Col><Icon style={styles.icon} onPress={() => this.rate(4)} name={this.iconName(rating, 4)} /></Col>
            <Col><Icon style={styles.icon} onPress={() => this.rate(5)} name={this.iconName(rating, 5)} /></Col>
          </Grid>
        </View>
      </View>
    );
  }
}

Rating.propTypes = {
  rating: React.PropTypes.number.isRequired,
  editable: React.PropTypes.bool,
  ratingChanged: React.PropTypes.func
};

const styles = {
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 45,
    width: 45,
  }
}
