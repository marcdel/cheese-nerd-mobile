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
import { cheeseSelected, currentReviewChanged, currentReviewReset } from '../actions/add';

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

  addReview () {
    const { review, ratings } = this.props;

    this.props.reviewAdded(review, ratings[review.cheeseId]);
    this.props.currentReviewReset();
    this.props.tabChanged('myBoard');
  }

  render () {
    const { review, cheeses, currentReviewChanged } = this.props;
    return (
      <Container>
        <View>
          <AddTitleBar tab="add" onCancel={() => this.props.tabChanged('myBoard')} onAdd={this.addReview} />
        </View>

        <Content>
          <AddDetail cheeses={cheeses} review={review} onReviewChanged={currentReviewChanged} />
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
    review: state.add.currentReview,
    cheeses: state.cheeses.all,
    ratings: state.cheeses.ratings
  }
}

Add.propTypes = {
};

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({tabChanged, reviewAdded, cheeseSelected, currentReviewChanged, currentReviewReset}, dispatch)
)(Add);
