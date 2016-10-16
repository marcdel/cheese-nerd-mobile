import { combineReducers } from 'redux';

import application from './application'
import cheeses from './cheeses'
import reviews from './reviews'

const reducers = combineReducers({
  application,
  cheeses,
  reviews
});

export default reducers;
