/* @flow */
import React, { Component, Image } from "react";
import {
  View,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  Container,
  Content,
  Footer,
  List,
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Icon
} from 'native-base';

import { tabChanged } from '../actions/application';
import TitleBar from '../components/TitleBar';
import Rating from '../components/Rating';
import BottomNav from '../components/BottomNav';

export class MyBoard extends Component {
  constructor() {
    super();
  }

  renderItem = (review, key) => {
    const image = require('../img/330.png');

    return (
      <ListItem key={key}>
        <Card>
          <CardItem>
            <Icon name='ios-image' />
            <Text>{review.name}</Text>
            <Text note>{review.name}</Text>
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
      <Container>
        <View>
          <TitleBar tab="myBoard" />
        </View>

        <Content>
          <List>
            {this.props.reviews.map((review, key) => this.renderItem(review, key))}
          </List>
        </Content>

        <Footer>
          <BottomNav tab="myBoard" tabChanged={this.props.tabChanged} />
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews
  }
}

MyBoard.propTypes = {
};

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({tabChanged}, dispatch)
)(MyBoard);
