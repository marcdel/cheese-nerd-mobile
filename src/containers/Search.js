/* @flow */
import React, { Component, Image } from "react";
import {
  View,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { tabChanged } from '../actions/application';
import { cheeseSelected } from '../actions/add';
import { queryChanged, cheesesFiltered } from '../actions/search';
import CheeseList from '../components/CheeseList';
import SearchBar from '../components/SearchBar';

export class Search extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.filterList(this.props.query);
  }

  filterList = (query) => {
    const cheeses = this.props.cheeses;

    this.props.queryChanged(query);

    if(query === '') {
      this.props.cheesesFiltered(cheeses);
    }

    let filteredCheeses = {};
    Object.keys(cheeses).map((key) => {
      const cheese = cheeses[key];
      const name = cheese.name.toLowerCase();
      const match = name.includes(query.toLowerCase());

      if(match) {
        filteredCheeses[key] = cheese;
      }
    });

    this.props.cheesesFiltered(filteredCheeses);
  }

  addPressed = (key) => {
    this.props.cheeseSelected(key);
    this.props.tabChanged('add');
  }

  render() {
    return (
      <View>
        <SearchBar query={this.props.query} textChanged={this.filterList} />
        <CheeseList cheeses={this.props.filteredCheeses} addPressed={this.addPressed} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    query: state.search.query,
    cheeses: state.cheeses.all,
    filteredCheeses: state.search.filteredCheeses,
  }
}

Search.propTypes = {
};

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({tabChanged, cheeseSelected, queryChanged, cheesesFiltered}, dispatch)
)(Search);
