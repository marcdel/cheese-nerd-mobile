/* @flow */
import * as reviewActions from '../actions/reviews'

const INITIAL_STATE = {
  all: require('../sample-cheeses'),
  ratings: require('../sample-ratings'),
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    default:
    return state;
  }
};
