/* @flow */
import React, { Component, Image } from "react";
import {
  StyleSheet,
} from 'react-native';

import {
  Container,
  Header,
  InputGroup,
  Icon,
  Input,
  Button,
} from 'native-base';

export default class SearchBar extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <InputGroup>
        <Icon name='ios-search' />
        <Input value={this.props.query} onChangeText={(value) => this.props.textChanged(value)} placeholder='Search'/>
      </InputGroup>
    );
  }
}

SearchBar.propTypes = {
  query: React.PropTypes.string.isRequired,
  textChanged: React.PropTypes.func.isRequired,
};

const styles = StyleSheet.create({ });
