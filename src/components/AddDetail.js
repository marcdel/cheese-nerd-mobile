/* @flow */
import React, { Component, Image } from "react";
import {
  StyleSheet,
} from 'react-native';

import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Input,
  Icon,
  Button
} from 'native-base';

import Rating from '../components/Rating';

export default class AddDetail extends Component {
  constructor() {
    super();

    this.noteChanged = this.noteChanged.bind(this);
    this.ratingChanged = this.ratingChanged.bind(this);
    this.addPressed = this.addPressed.bind(this);
  }

  componentWillMount () {
    this.setState({ rating: 0, notes: '' })
  }

  noteChanged(notes) {
    this.setState({notes: notes});
  }

  ratingChanged (rating) {
    this.setState({rating: rating});
  }

  addPressed () {
    this.props.addReview({
      cheeseId: this.props.cheese.id,
      notes: this.state.notes,
      rating: this.state.rating
    });
  }

  render () {
    const image = require('../img/330.png');
    const { cheese } = this.props;

    return (
      <Card>
        <CardItem>
          <Thumbnail square source={image} />
          <Text>{cheese.name}</Text>
          <Text note>April 15, 2016</Text>
        </CardItem>

        <CardItem cardBody>
          <Input placeholder='Notes' value={this.state.notes} onChangeText={this.noteChanged} multiline={true} style={{height:  40}} />
        </CardItem>
        <CardItem onPress={() => this.addPressed()}>
          <Icon name='ios-checkmark-circle-outline' />
          <Text>Add</Text>
          <Rating rating={this.state.rating} editable={true} ratingChanged={this.ratingChanged} />
        </CardItem>
      </Card>
    );
  }
}

AddDetail.propTypes = {
  cheese: React.PropTypes.object.isRequired,
  addReview: React.PropTypes.func.isRequired,
};

const styles = StyleSheet.create({ });
