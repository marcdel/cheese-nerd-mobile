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
  Content,
  Footer,
} from 'native-base';

import { tabChanged } from '../actions/application';
import MyBoard from './MyBoard';
import Search from './Search';
import Add from './Add';
import Promo from './Promo';
import Account from './Account';
import BottomNav from '../components/BottomNav';
import TitleBar from '../components/TitleBar';

export class App extends Component {

  render () {
    const tab = this.props.tab;

    return (
      <Container>
        <Header>
          <TitleBar tab={tab} />
        </Header>

        <Content>
          { tab === 'myBoard' &&
            <MyBoard reviews={this.props.reviews} />
          }

          { tab === 'search' &&
            <Search cheeses={this.props.cheeses} />
          }

          { tab === 'add' &&
            <Add />
          }

          { tab === 'promo' &&
            <Promo />
          }

          { tab === 'account' &&
            <Account />
          }
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
    cheeses: state.cheeses,
    reviews: state.reviews
  }
}

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({tabChanged}, dispatch)
)(App);
