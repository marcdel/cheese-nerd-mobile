/* @flow */
import * as actions from '../actions/search';

const INITIAL_STATE = {
  query: '',
  filteredCheeses: {}
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CHEESES_FILTERED:
      return {
        ...state,
        filteredCheeses: action.cheeses,
      };
    case actions.QUERY_CHANGED:
      return {
        ...state,
        query: action.query,
      };
    default:
      return state;
  }
};
