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

    this.nameChanged = this.nameChanged.bind(this);
    this.noteChanged = this.noteChanged.bind(this);
    this.ratingChanged = this.ratingChanged.bind(this);
    this.ageChanged = this.ageChanged.bind(this);
    this.milkTypeChanged = this.milkTypeChanged.bind(this);
    this.regionChanged = this.regionChanged.bind(this);
    this.pasteurizationChanged = this.pasteurizationChanged.bind(this);
    this.onReviewChanged = this.onReviewChanged.bind(this);
  }

  componentWillMount () {
    this.setState(this.props.review);
  }

  nameChanged(name) {
    const cheeses = this.props.cheeses;
    const cheeseId = Object.keys(cheeses).filter((key) => {
      return cheeses[key].name === name
    })[0];

    this.setState({name: name, cheeseId: cheeseId });
    this.onReviewChanged()
  }

  noteChanged(notes) {
    this.setState({notes: notes});
    this.onReviewChanged()
  }

  ratingChanged (rating) {
    this.setState({rating: rating});
    this.onReviewChanged()
  }

  ageChanged (age) {
    this.setState({age: age});
    this.onReviewChanged()
  }

  milkTypeChanged(milkType) {
    this.setState({milkType: milkType});
    this.onReviewChanged()
  }

  pasteurizationChanged(pasteurization) {
    this.setState({pasteurization: pasteurization});
    this.onReviewChanged()
  }

  regionChanged(region) {
    this.setState({region: region});
    this.onReviewChanged()
  }

  onReviewChanged() {
    const review = {
      cheeseId: this.state.cheeseId,
      notes: this.state.notes,
      rating: this.state.rating,
      age: this.state.age,
      milkType: this.state.milkType,
      pasteurization: this.state.pasteurization,
      region: this.state.region,
    }

console.log(review);
    this.props.onReviewChanged(review);
  }

  render () {
    const image = require('../img/330.png');
    const { cheeses } = this.props;

    return (
      <Card>
        <CardItem>
          <Image style={{ resizeMode: 'cover' }} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
        </CardItem>

        <CardItem cardBody>
          <Text>Cheese Name</Text>
          <InputGroup>
            <Input placeholder="Ex. Roquefort" value={this.state.name} onChangeText={this.nameChanged} />
          </InputGroup>

          <Text>Your Rating</Text>
          <Rating rating={this.state.rating} editable={true} ratingChanged={this.ratingChanged} />

          <Text>Notes</Text>
          <InputGroup>
            <Input placeholder="Ex. This variety is round, deep, and perfectly balanced, with big creamy chunks. Sweet and fudgy, its linger is peppery."
                   value={this.state.notes} onChangeText={this.noteChanged} multiline={true} style={{height:  70}} />
          </InputGroup>

          <MilkType selectedValue={this.state.milkType} onChange={this.milkTypeChanged} />

          <Text>Age</Text>
          <InputGroup>
            <Input placeholder="Ex. Cave aged, 2 to 4 months." value={this.state.age} onChangeText={this.ageChanged} />
          </InputGroup>

          <Pasteurization selected={this.state.pasteurization} onChange={this.pasteurizationChanged} />

          <Text>Region</Text>
          <Input placeholder="Ex. Midi-Pyrenees, France" value={this.state.region} onChangeText={this.regionChanged} />
        </CardItem>
      </Card>
    );
  }
}

AddDetail.propTypes = {
  cheeses: React.PropTypes.object.isRequired,
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
