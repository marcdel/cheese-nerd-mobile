/* @flow */
import React, { Component } from "react";
import {
  StyleSheet,
} from 'react-native';

import {
  Footer,
  FooterTab,
  Button,
  Icon
} from 'native-base';

export default class BottomNav extends Component {
  constructor() {
    super();
  }

  render () {
    const tab = this.props.tab;

    return (
      <FooterTab>
        <Button active={tab === 'myBoard'} onPress={() => this.props.tabChanged('myBoard')}>
          My Board<Icon name='ios-restaurant' />
        </Button>
        <Button active={tab === 'search'} onPress={() => this.props.tabChanged('search')}>
          Search<Icon name='ios-search' />
        </Button>
        <Button active={tab === 'add'} onPress={() => this.props.tabChanged('add')}>
          Add<Icon name='ios-add-circle' />
        </Button>
        <Button active={tab === 'promo'} onPress={() => this.props.tabChanged('promo')}>
          Promo<Icon name='ios-ribbon' />
        </Button>
        <Button active={tab === 'account'} onPress={() => this.props.tabChanged('account')}>
          Account<Icon name='ios-person' />
        </Button>
      </FooterTab>
    );
  }
}

BottomNav.propTypes = {
  tab: React.PropTypes.string.isRequired,
  tabChanged: React.PropTypes.func.isRequired,
};
