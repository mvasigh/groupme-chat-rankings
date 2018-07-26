import { combineReducers } from 'redux';
import rankingsReducer from './rankings';
import periodReducer from './period';

export default combineReducers({
  rankings: rankingsReducer,
  period: periodReducer
});
