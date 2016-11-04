/* @flow */
import * as reviewActions from '../actions/reviews'

const INITIAL_STATE = {
  all: require('../sample-cheeses'),
  ratings: require('../sample-ratings'),
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case reviewActions.REVIEW_ADDED:
      const average = action.newAverage;
      return {
        all: {
          ...state.all,
          [action.cheeseId]: {
            ...state.all[action.cheeseId],
            reviewCount: state.all[action.cheeseId].reviewCount + 1,
            rating: average
          }
        },
        ratings: {
          ...state.ratings,
          [action.cheeseId]: {
            ...state.ratings[action.cheeseId],
            [action.rating]: state.ratings[action.cheeseId][action.rating] + 1
          }
        }
      };
    default:
    return state;
  }
};
