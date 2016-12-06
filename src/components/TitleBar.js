/* @flow */
import React, { Component } from "react";
import {
  View,
  StyleSheet,
} from 'react-native';

import {
  Header,
  Title,
} from 'native-base';

import { tabs } from "../config/globals";
export default class TitleBar extends Component {
  constructor() {
    super();
  }

  render () {
    const { tab } = this.props;

    return (
      <Header>
        <Title>
          {tabs[tab]}
        </Title>
      </Header>
    );
  }
}

TitleBar.propTypes = {
  tab: React.PropTypes.string.isRequired,
};
