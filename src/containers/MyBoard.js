/* @flow */
import React, { Component, Image } from "react";
import {
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  Container,
  Header,
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

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem (key) {
    const review = this.props.reviews[key];
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
    const { tab, tabChanged, reviews } = this.props;

    return (
      <Container>
        <Header>
          <Content>
            <TitleBar tab={tab} />
          </Content>
        </Header>

        <Content>
          <List>
            {Object.keys(reviews).map((key) => this.renderItem(key))}
          </List>
        </Content>

        <Footer>
          <BottomNav tab={tab} tabChanged={tabChanged} />
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tab: state.application.tab,
    cheeses: state.cheeses,
  }
}

MyBoard.propTypes = {
  reviews: React.PropTypes.object.isRequired,
};

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({tabChanged}, dispatch)
)(MyBoard);
