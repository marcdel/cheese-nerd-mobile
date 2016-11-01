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
import AddDetail from '../components/AddDetail';

export class Add extends Component {
  constructor() {
    super();

    this.addReview = this.addReview.bind(this);
  }

  addReview (review) {
    this.props.reviewAdded(review);
    this.props.tabChanged('myBoard');
  }

  render () {
    const { selectedCheese, cheeses } = this.props;
    return selectedCheese ?
    (<AddDetail cheese={cheeses[selectedCheese]} addReview={this.addReview} />) :
    (
      <View>
        <Text>No cheese selected</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCheese: state.add.selectedCheese,
    cheeses: state.cheeses
  }
}

Add.propTypes = {
};

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({tabChanged, reviewAdded}, dispatch)
)(Add);
