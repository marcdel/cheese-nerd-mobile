import { combineReducers } from 'redux';

import application from './application'
import cheeses from './cheeses'
import reviews from './reviews'
import search from './search'

const reducers = combineReducers({
  application,
  cheeses,
  reviews,
  search
});

export default reducers;
