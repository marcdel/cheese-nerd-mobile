/* @flow */
const INITIAL_STATE = {
  1: {
    cheeseId: 'cheese1',
    notes: 'Pretty good, I guess.',
    rating: 2
  },
  2: {
    cheeseId: 'cheese2',
    notes: 'A longer review. A longer review. A longer review. A longer review. A longer review. A longer review. A longer review. A longer review. A longer review.',
    rating: 3
  }
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
