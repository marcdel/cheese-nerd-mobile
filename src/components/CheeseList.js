/* @flow */
import React, { Component, Image } from "react";
import {
  StyleSheet,
} from 'react-native';

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

export default class CheeseList extends Component {
  constructor() {
    super();

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem (key) {
    const cheese = this.props.cheeses[key];
    const image = require('../img/330.png');

    return (
      <ListItem key={key}>
        <Card>
          <CardItem>
            <Text>{cheese.name}</Text>
            <Text note>{cheese.name}</Text>
          </CardItem>

          <CardItem>
            <Thumbnail square size={330} source={image} />
            {/*
              <Icon name='ios-image' />
              <Image source={{ uri: cheese.image }}
                style={{ resizeMode: 'cover', width: 400, height: 400 }} />
            */}
          </CardItem>

          <CardItem onPress={() => {console.log("Add pressed")}}>
            <Icon name='ios-checkmark-circle-outline' />
            <Text>Add</Text>
            <Rating rating={cheese.rating} />
          </CardItem>
        </Card>
      </ListItem>
    );
  }

  render () {
    return (
      <List>
        {Object.keys(this.props.cheeses).map((key) => this.renderItem(key))}
      </List>
    );
  }
}

CheeseList.propTypes = {
  cheeses: React.PropTypes.object.isRequired,
};

const styles = StyleSheet.create({ });
