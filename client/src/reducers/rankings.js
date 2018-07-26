import {
  GET_DAY_RANKINGS,
  GET_WEEK_RANKINGS,
  GET_MONTH_RANKINGS
} from '../actions/types';

export default function rankingsReducer(state = {}, action) {
  switch (action.type) {
    case GET_DAY_RANKINGS:
      return { day: action.payload.data, ...state };
    case GET_WEEK_RANKINGS:
      return { week: action.payload.data, ...state };
    case GET_MONTH_RANKINGS:
      return { month: action.payload.data, ...state };
    default:
      return state;
  }
}
