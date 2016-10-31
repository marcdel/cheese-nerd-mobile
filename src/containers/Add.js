/* @flow */
import React, { Component, Image } from "react";
import {
  View,
  Text,
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
import BottomNav from '../components/BottomNav';

export class Add extends Component {
  constructor() {
    super();
  }

  render () {
    const { tab, tabChanged } = this.props;

    return (
      <Container>
        <Header>
          <Content>
            <TitleBar tab={tab} />
          </Content>
        </Header>

        <Content>
          <Text>Add</Text>
        </Content>

        <Footer>
          <BottomNav tab={tab} tabChanged={tabChanged} />
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

Add.propTypes = {
};

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({tabChanged}, dispatch)
)(Add);
