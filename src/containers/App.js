/* @flow */
import React, { Component } from "react";
import {
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  Container,
  Header,
  Content,
  Footer,
} from 'native-base';

import { tabChanged } from '../actions/application';
import TitleBar from '../components/TitleBar';
import MainContent from '../components/MainContent';
import BottomNav from '../components/BottomNav';

export class App extends Component {

  render () {
    const tab = this.props.tab;

    return (
      <Container>
        <Header>
          <TitleBar tab={tab} />
        </Header>

        <Content>
          <MainContent tab={tab} />
        </Content>

        <Footer>
          <BottomNav tab={this.props.tab} tabChanged={this.props.tabChanged} />
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tab: state.application.tab,
  }
}

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({tabChanged}, dispatch)
)(App);
