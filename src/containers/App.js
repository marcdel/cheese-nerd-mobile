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

import { tabChanged } from '../actions/application';
import MyBoard from './MyBoard';
import Search from './Search';
import Add from './Add';
import Promo from './Promo';
import Account from './Account';

export class App extends Component {

  render () {
    const tab = this.props.tab;

    return (
      <Container>
        <Header>
          <Title>
            { tab === 'search' && 'Search' }
            { tab === 'myBoard' && 'My Board' }
            { tab === 'add' && 'Add' }
            { tab === 'promo' && 'Promo' }
            { tab === 'account' && 'Account' }
          </Title>
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
          <FooterTab>
            <Button onPress={() => this.props.tabChanged('myBoard')} transparent><Icon name='ios-restaurant' /></Button>
            <Button onPress={() => this.props.tabChanged('search')} transparent><Icon name='ios-search' /></Button>
            <Button onPress={() => this.props.tabChanged('add')} transparent><Icon name='ios-add-circle' /></Button>
            <Button onPress={() => this.props.tabChanged('promo')} transparent><Icon name='ios-ribbon' /></Button>
            <Button onPress={() => this.props.tabChanged('account')} transparent><Icon name='ios-person' /></Button>
          </FooterTab>
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
