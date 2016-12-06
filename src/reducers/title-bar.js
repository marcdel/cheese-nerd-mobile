/* @flow */
import * as actions from '../actions/application';

const INITIAL_STATE = {
  title: '',
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.TAB_CHANGED:
      return {
        ...state,
        title: action.tab,
      };
    default:
      return state;
  }
};
