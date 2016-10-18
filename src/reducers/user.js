/* @flow */
import * as actions from '../actions/user';

const INITIAL_STATE = {
  userId: 0,
  loggedIn: false,
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        userId: action.userId,
        loggedIn: action.loggedIn,
      };
    default:
      return state;
  }
};
