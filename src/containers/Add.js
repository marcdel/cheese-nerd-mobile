/* @flow */
import React, { Component, Image } from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  View,
  StyleSheet,
	AsyncStorage,
} from 'react-native';

import {
  Container,
  Content,
  Footer,
} from 'native-base';

import { tabChanged } from '../actions/application';
import { reviewAdded } from '../actions/reviews';
import { cheeseSelected, currentReviewChanged, currentReviewReset } from '../actions/add';
import Repository from '../models/repository';

import AddTitleBar from '../components/AddTitleBar';
import AddDetail from '../components/AddDetail';
import BottomNav from '../components/BottomNav';

export class Add extends Component {
  constructor() {
    super();
  }

  componentWillUnmount () {
    this.props.cheeseSelected('');
  }

  addReview = () => {
    const { review, reviews } = this.props;

		const updated_reviews = JSON.stringify([review, ...reviews]);

    const repo = new Repository();
    repo.saveAllReviews(updated_reviews);

    this.props.reviewAdded(review);

    this.props.currentReviewReset();
    this.props.tabChanged('myBoard');
  }

  render () {
    const { review, currentReviewChanged } = this.props;

    return (
      <Container>
        <View>
          <AddTitleBar tab="add" onCancel={() => this.props.tabChanged('myBoard')} onAdd={this.addReview} />
        </View>

        <Content>
          <AddDetail review={review} onReviewChanged={currentReviewChanged} />
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
		reviews: state.reviews,
  }
}

Add.propTypes = {
};

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({tabChanged, reviewAdded, cheeseSelected, currentReviewChanged, currentReviewReset}, dispatch)
)(Add);
