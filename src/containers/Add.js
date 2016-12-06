/* @flow */
import React, { Component, Image } from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  View,
  StyleSheet,
} from 'react-native';

import {
  Container,
  Content,
  Footer,
} from 'native-base';

import { tabChanged } from '../actions/application';
import { reviewAdded } from '../actions/reviews';
import { cheeseSelected } from '../actions/add';

import AddTitleBar from '../components/AddTitleBar';
import AddDetail from '../components/AddDetail';
import BottomNav from '../components/BottomNav';

export class Add extends Component {
  constructor() {
    super();

    this.addReview = this.addReview.bind(this);
  }

  componentWillUnmount () {
    this.props.cheeseSelected('');
  }

  addReview (review) {
    console.log(review);
    return;

    const { ratings } = this.props;
    this.props.reviewAdded(review, ratings[review.cheeseId]);
    this.props.tabChanged('myBoard');
  }

  render () {
    const { selectedCheese, cheeses } = this.props;
    return (
      <Container>
        <View>
          <AddTitleBar tab="add" onCancel={() => this.props.tabChanged('myBoard')} onAdd={this.addReview} />
        </View>

        <Content>
          <AddDetail cheese={cheeses["cheese1"]} addReview={this.addReview} />
        </Content>

        <Footer>
          <BottomNav tab="add" tabChanged={this.props.tabChanged} />
        </Footer>
      </Container>
    );
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
