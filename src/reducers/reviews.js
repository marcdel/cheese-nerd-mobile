/* @flow */
import * as actions from '../actions/reviews'

const INITIAL_STATE = [];

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.REVIEW_ADDED:
      return [
        {
          name: action.name,
          notes: action.notes,
          rating: action.rating,
          age: action.age,
          milkType: action.milkType,
          pasteurization: action.pasteurization,
          region: action.region,
        },
        ...state
      ]
    default:
      return state;
  }
};
