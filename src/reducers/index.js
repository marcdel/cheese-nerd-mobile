import { combineReducers } from 'redux';

import application from './application'
import user from './user'
import cheeses from './cheeses'
import reviews from './reviews'
import search from './search'
import add from './add'
import titleBar from './title-bar'

const reducers = combineReducers({
  application,
  user,
  cheeses,
  reviews,
  search,
  add,
  titleBar,
});

export default reducers;
