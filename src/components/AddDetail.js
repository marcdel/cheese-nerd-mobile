/* @flow */
import React, { Component } from "react";
import {
  Image,
  View,
  StyleSheet,
} from 'react-native';

import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  InputGroup,
  Input,
  Icon,
  Picker,
  Grid,
  Col,
  Button,
} from 'native-base';

import Rating from '../components/Rating';
import Pasteurization from '../components/Pasteurization';
import MilkType from '../components/MilkType';

export default class AddDetail extends Component {
  constructor() {
    super();
  }

  nameChanged = (name) => {
    this.props.onReviewChanged({...this.props.review, name: name});
  }

  noteChanged = (notes) => {
    this.props.onReviewChanged({...this.props.review, notes: notes});
  }

  ratingChanged = (rating) => {
    this.props.onReviewChanged({...this.props.review, rating: rating});
  }

  ageChanged = (age) => {
    this.props.onReviewChanged({...this.props.review, age: age});
  }

  milkTypeChanged = (milkType) => {
    this.props.onReviewChanged({...this.props.review, milkType: milkType});
  }

  pasteurizationChanged = (pasteurization) => {
    this.props.onReviewChanged({...this.props.review, pasteurization: pasteurization});
  }

  regionChanged = (region) => {
    this.props.onReviewChanged({...this.props.review, region: region});
  }

  render() {
    const image = require('../img/330.png');
    const { review } = this.props;

    return (
      <Card>
        <CardItem>
          <Image style={{ resizeMode: 'cover' }} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
        </CardItem>

        <CardItem cardBody>
          <Text>Cheese Name</Text>
          <InputGroup>
            <Input placeholder="Ex. Roquefort" value={review.name} onChangeText={this.nameChanged} />
          </InputGroup>

          <Text>Your Rating</Text>
          <Rating rating={review.rating} editable={true} ratingChanged={this.ratingChanged} />

          <Text>Notes</Text>
          <InputGroup>
            <Input placeholder="Ex. This variety is round, deep, and perfectly balanced, with big creamy chunks. Sweet and fudgy, its linger is peppery."
                   value={review.notes} onChangeText={this.noteChanged} multiline={true} style={{height:  70}} />
          </InputGroup>

          <MilkType selectedValue={review.milkType} onChange={this.milkTypeChanged} />

          <Text>Age</Text>
          <InputGroup>
            <Input placeholder="Ex. Cave aged, 2 to 4 months." value={review.age} onChangeText={this.ageChanged} />
          </InputGroup>

          <Pasteurization selected={review.pasteurization} onChange={this.pasteurizationChanged} />

          <Text>Region</Text>
          <Input placeholder="Ex. Midi-Pyrenees, France" value={review.region} onChangeText={this.regionChanged} />
        </CardItem>
      </Card>
    );
  }
}

AddDetail.propTypes = {
  review: React.PropTypes.object.isRequired,
  onReviewChanged: React.PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pasteurizationButtons: {
    width: 120,
  },
});
