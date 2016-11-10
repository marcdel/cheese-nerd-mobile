/* @flow */
import React, { Component, Image } from "react";
import {
  StyleSheet,
} from 'react-native';

import {
  InputGroup,
  Icon,
  Input,
  Button,
} from 'native-base';

export default class TextInput extends Component {
  constructor() {
    super();
  }

  render () {
    const { label, placeholder, text, textChanged } = this.props;

    return (
      <InputGroup>
        <Input stackedLabel label={label}
               value={text}
               onChangeText={(value) => textChanged(value)}
               placeholder={placeholder}/>
      </InputGroup>
    );
  }
}

TextInput.propTypes = {
  label: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  text: React.PropTypes.string.isRequired,
  textChanged: React.PropTypes.func.isRequired,
};

const styles = StyleSheet.create({ });
