/* @flow */
import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

import {
  Header,
  Title,
  Button,
} from 'native-base';

import { tabs } from "../config/globals";
import TitleBar from './TitleBar';
export default class AddTitleBar extends Component {
  constructor() {
    super();
  }

  render () {
    const { tab, onCancel, onAdd } = this.props;
    return (
      <Header>
        <Button transparent onPress={onCancel}>Cancel</Button>
        <Title>
          {tabs[tab]}
        </Title>
        <Button transparent onPress={onAdd}>Add</Button>
      </Header>
    );
  }
}

AddTitleBar.propTypes = {
  tab: React.PropTypes.string.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  onAdd: React.PropTypes.func.isRequired,
};

const styles = StyleSheet.create({ });
