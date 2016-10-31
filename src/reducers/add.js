/* @flow */
import * as actions from '../actions/add';

const INITIAL_STATE = {
  selectedCheese: '',
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CHEESE_SELECTED:
      return {
        ...state,
        selectedCheese: action.key,
      };
    default:
      return state;
  }
};
