import { combineReducers } from 'redux';
import words from './wordReducers';

export default combineReducers({
  words: words,
});