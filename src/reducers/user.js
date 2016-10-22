/* @flow */
import * as actions from '../actions/user';

const INITIAL_STATE = {
  credentials: {},
  photo: {},
  name: "",
  email: "",
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
    case actions.PHOTO_ADDED:
      return {
        ...state,
        photo: action.photo,
      };
    case actions.DETAILS_ADDED:
      return {
        ...state,
        name: action.name,
        email: action.email,
      };
    default:
      return state;
  }
};
