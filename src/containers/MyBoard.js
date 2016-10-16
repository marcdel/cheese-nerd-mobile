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

export class MyBoard extends Component {
  constructor() {
    super();

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem (key) {
    const review = this.props.reviews[key];
    const cheese = this.props.cheeses[review.cheeseId];
    const image = require('../img/330.png');
    console.log(review);

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
              <Icon name='ios-star' />
              <Icon name='ios-star' />
              <Icon name='ios-star' />
              <Icon name='ios-star-outline' />
            </CardItem>
          </CardItem>
        </Card>
      </ListItem>
    );
  }

  render () {
    return (
      <List>
        {Object.keys(this.props.reviews).map((key) => this.renderItem(key))}
      </List>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cheeses: state.cheeses,
  }
}

MyBoard.propTypes = {
  reviews: React.PropTypes.object.isRequired,
};

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({/** _INSERT_ACTION_CREATORS_ **/}, dispatch)
)(MyBoard);
