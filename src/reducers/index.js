import { combineReducers } from 'redux';

import application from './application'
import user from './user'
import cheeses from './cheeses'
import reviews from './reviews'
import search from './search'
import add from './add'

const reducers = combineReducers({
  application,
  user,
  cheeses,
  reviews,
  search,
  add
});

export default reducers;
