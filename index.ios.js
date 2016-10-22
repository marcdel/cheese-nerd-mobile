/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';

import Root from './src/containers/Root';
import reducers from './src/reducers';

const store = createStore(reducers, devToolsEnhancer());

export default class CheeseNerdMobile extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('CheeseNerdMobile', () => CheeseNerdMobile);
