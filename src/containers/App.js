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

import Search from './Search';

export class App extends Component {

  render () {
    const tab = this.props.tab;
    return (
      <Container>
        <Header>
          <Title>
            { tab === 'search' && 'Search' }
          </Title>
        </Header>

        <Content>
          { tab === 'search' &&
            <Search cheeses={this.props.cheeses} />
          }
        </Content>

        <Footer>
          <FooterTab>
            <Button transparent><Icon name='ios-restaurant' /></Button>
            <Button transparent><Icon name='ios-search' /></Button>
            <Button transparent><Icon name='ios-add-circle' /></Button>
            <Button transparent><Icon name='ios-ribbon' /></Button>
            <Button transparent><Icon name='ios-person' /></Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tab: state.application.tab,
    cheeses: state.application.cheeses
  }
}

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({/** _INSERT_ACTION_CREATORS_ **/}, dispatch)
)(App);
