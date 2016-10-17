/* @flow */
import React, { Component } from "react";
import {
  View,
  StyleSheet,
} from 'react-native';

import MyBoard from '../containers/MyBoard';
import Search from '../containers/Search';
import Add from '../containers/Add';
import Promo from '../containers/Promo';
import Account from '../containers/Account';

export default class ComponentTemplate extends Component {
  constructor() {
    super();
  }

  render () {
    const tab = this.props.tab;

    return (
      <View>
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
      </View>
    );
  }
}

ComponentTemplate.propTypes = {
  tab: React.PropTypes.string.isRequired,
  cheeses: React.PropTypes.object.isRequired,
  reviews: React.PropTypes.object.isRequired,
};
