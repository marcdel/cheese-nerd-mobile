/* @flow */
import * as actions from '../actions/add';

const blankReview = {
  cheeseId: '',
  name: '',
  rating: 0,
  notes: '',
  age: '',
  milkType: '',
  pasteurization: '',
  region: '',
}

const INITIAL_STATE = {
  selectedCheese: '',
  currentReview: blankReview
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CHEESE_SELECTED:
      return {
        ...state,
        selectedCheese: action.key,
      };
    case actions.REVIEW_CHANGED:
      return {
        ...state,
        currentReview: action.review,
      };
    case actions.REVIEW_RESET:
      return {
        ...state,
        currentReview: blankReview,
      };
    default:
      return state;
  }
};
