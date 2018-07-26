import { FILTER_PERIOD } from '../actions/types';

export default function periodReducer(state = 'week', action) {
  switch (action.type) {
    case FILTER_PERIOD:
      return action.payload;
    default:
      return state;
  }
}
