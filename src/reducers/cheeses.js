/* @flow */
import * as reviewActions from '../actions/reviews'

const INITIAL_STATE = require('../sample-cheeses');

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case reviewActions.REVIEW_ADDED:
      return {
        ...state,
        [action.cheeseId]: {
          ...state[action.cheeseId],
          reviewCount: state[action.cheeseId].reviewCount + 1
        }
      };
    default:
      return state;
  }
};
