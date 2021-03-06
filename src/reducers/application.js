/* @flow */
import * as actions from '../actions/application';

const INITIAL_STATE = {
  tab: 'myBoard',
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.TAB_CHANGED:
      return {
        ...state,
        tab: action.tab,
      };
    default:
      return state;
  }
};
