/* @flow */
import * as actions from '../actions/reviews'

const INITIAL_STATE = [
  {
    cheeseId: 'cheese1',
    notes: 'Pretty good, I guess.',
    rating: 2
  },
  {
    cheeseId: 'cheese2',
    notes: 'A longer review. A longer review. A longer review. A longer review. A longer review. A longer review. A longer review. A longer review. A longer review.',
    rating: 3
  }
];

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.REVIEW_ADDED:
      return [
        {
          cheeseId: action.cheeseId,
          notes: action.notes,
          rating: action.rating
        },
        ...state
      ]
    default:
      return state;
  }
};
