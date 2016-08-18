/* @flow */
import React, { Component } from "react";
import { AppRegistry, View, ScrollView, Text, StyleSheet } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

const RouterWithRedux = connect()(Router);
import reducers from '../reducers';


import HomeApp from "./HomeApp";
import Cheese from "../components/Cheese";

const middleware = [/* ... middleware (i.e. thunk) */];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers);

export default class MasterLayout extends Component {
  constructor(){
    super();

    this.state = {
      cheeses: require('../sample-cheeses'),
    };
  }

  render() {
    return (
      <View>
        <View>
          <Provider store={store}>
            <RouterWithRedux>
              <Scene key="root">
                <Scene key="home" component={HomeApp} title="Cheese Nerd" initial={true} />
                <Scene key="cheese" component={Cheese} />
              </Scene>
            </RouterWithRedux>
          </Provider>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 665
  },
  scrollView: {
    flex: 1,
    height: 625
  },
});
