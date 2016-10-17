/* @flow */
import React, { Component, Image } from "react";
import {
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

  render () {
    const rating = this.props.rating;
    return (
      <Grid>
        <Col><Icon name={ rating >= 1 ? 'ios-star' : 'ios-star-outline'} /></Col>
        <Col><Icon name={ rating >= 2 ? 'ios-star' : 'ios-star-outline'} /></Col>
        <Col><Icon name={ rating >= 3 ? 'ios-star' : 'ios-star-outline'} /></Col>
        <Col><Icon name={ rating >= 4 ? 'ios-star' : 'ios-star-outline'} /></Col>
        <Col><Icon name={ rating >= 5 ? 'ios-star' : 'ios-star-outline'} /></Col>
      </Grid>
    );
  }
}

Rating.propTypes = {
  rating: React.PropTypes.number.isRequired
};
