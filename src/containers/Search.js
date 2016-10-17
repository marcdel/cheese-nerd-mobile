/* @flow */
import React, { Component, Image } from "react";
import {
  View,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  List,
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Icon
} from 'native-base';

import { queryChanged, cheesesFiltered } from '../actions/search';
import Rating from '../components/Rating';
import SearchBar from '../components/SearchBar';

export class Search extends Component {
  constructor() {
    super();

    this.renderItem = this.renderItem.bind(this);
    this.filterList = this.filterList.bind(this);
  }

  componentWillMount () {
    this.filterList(this.props.query);
  }

  filterList (query) {
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

  renderItem (key) {
    const cheese = this.props.cheeses[key];
    const image = require('../img/330.png');

    return (
      <ListItem key={key}>
        <Card>
          <CardItem>
            <Text>{cheese.name}</Text>
            <Text note>{cheese.name}</Text>
          </CardItem>

          <CardItem>
            <Thumbnail square size={330} source={image} />
            {/*
              <Icon name='ios-image' />
              <Image source={{ uri: cheese.image }}
                style={{ resizeMode: 'cover', width: 400, height: 400 }} />
            */}
          </CardItem>

          <CardItem>
            <Icon name='ios-checkmark-circle-outline' />
            <Text>Check-In</Text>
            <Rating rating={cheese.rating} />
          </CardItem>
        </Card>
      </ListItem>
    );
  }

  render () {
    return (
      <View>
        <SearchBar query={this.props.query} textChanged={this.filterList} />
        <List>
          {Object.keys(this.props.filteredCheeses).map((key) => this.renderItem(key))}
        </List>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    query: state.search.query,
    filteredCheeses: state.search.filteredCheeses,
  }
}

Search.propTypes = {
  cheeses: React.PropTypes.object.isRequired,
};

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({queryChanged, cheesesFiltered}, dispatch)
)(Search);
