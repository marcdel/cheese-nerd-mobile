/* @flow */
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon
} from 'native-base';

export class App extends Component {
  /**
   * Called by ReactRouter before loading the container. Called prior to the
   * React life cycle so doesn't have access to component's props or state.
   *
   * @param {Object} store redux store object
   * @param {Object} renderProps render properties returned from ReactRouter
   * @param {Object} query location data
   * @param {Object} serverProps server specific properties
   * @param {Boolean} serverProps.isServer method running on server or not
   * @param {Request} [serverProps.request] express request if isServer
   *
   * @return {(Promise|undefined)} If this method returns a promise, the router
   * will wait for the promise to resolve before the container is loaded.
   */
  static gsBeforeRoute (/* {dispatch}, renderProps, query, serverProps */) {}

  render () {
    return (
      <Container>
        <Header>
          <Title>Header</Title>
        </Header>

        <Content>
        </Content>

        <Footer>
          <FooterTab>
            <Button transparent> My Board </Button>
            <Button transparent> Search </Button>
            <Button transparent> Add </Button>
            <Button transparent> Promo </Button>
            <Button transparent> Account </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default connect(
  (/* state */) => ({/** _INSERT_STATE_  **/}),
  (dispatch) => bindActionCreators({/** _INSERT_ACTION_CREATORS_ **/}, dispatch)
)(App);
