/* @flow */
import * as actions from '../actions/user';

const INITIAL_STATE = {
  credentials: {},
  loggedIn: false,
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        credentials: action.credentials,
        loggedIn: true,
      };
    case actions.LOGOUT:
      return {
        ...state,
        credentials: {},
        loggedIn: false,
      };
    default:
      return state;
  }
};
