/* @flow */
const INITIAL_STATE = {
  cheeses: require('../sample-cheeses')
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
