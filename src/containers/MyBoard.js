/* @flow */
import React, { Component, Image } from "react";
import {
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  List,
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Icon
} from 'native-base';

import Rating from '../components/Rating';

export class MyBoard extends Component {
  constructor() {
    super();

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem (review, key) {
    const cheese = this.props.cheeses[review.cheeseId];
    const image = require('../img/330.png');

    return (
      <ListItem key={key}>
        <Card>
          <CardItem>
            <Icon name='ios-image' />
            <Text>{cheese.name}</Text>
            <Text note>{cheese.name}</Text>
          </CardItem>

          <CardItem cardBody>
            <CardItem>
              <Text>
                {review.notes}
              </Text>
            </CardItem>
            <CardItem>
              <Rating rating={review.rating} />
            </CardItem>
          </CardItem>
        </Card>
      </ListItem>
    );
  }

  render () {
    return (
      <List>
        {this.props.reviews.map((review, key) => this.renderItem(review, key))}
      </List>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cheeses: state.cheeses.all,
    reviews: state.reviews
  }
}

MyBoard.propTypes = {
};

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({/** _INSERT_ACTION_CREATORS_ **/}, dispatch)
)(MyBoard);
