/* @flow */
import React, { Component, Image } from "react";
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import { tabChanged } from '../actions/application';
import { reviewAdded } from '../actions/reviews';
import { cheeseSelected } from '../actions/add';
import Search from '../containers/Search';
import AddDetail from '../components/AddDetail';

export class Add extends Component {
  constructor() {
    super();

    this.addReview = this.addReview.bind(this);
  }

  componentWillUnmount () {
    this.props.cheeseSelected('');
  }

  addReview (review) {
    const { ratings } = this.props;
    this.props.reviewAdded(review, ratings[review.cheeseId]);
    this.props.tabChanged('myBoard');
  }

  render () {
    const { selectedCheese, cheeses } = this.props;
    return selectedCheese ?
      (<AddDetail cheese={cheeses[selectedCheese]} addReview={this.addReview} />) :
      (<Search />);
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCheese: state.add.selectedCheese,
    cheeses: state.cheeses.all,
    ratings: state.cheeses.ratings
  }
}

Add.propTypes = {
};

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({tabChanged, reviewAdded, cheeseSelected}, dispatch)
)(Add);
