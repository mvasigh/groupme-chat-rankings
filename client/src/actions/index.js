import axios from 'axios';
import {
  GET_DAY_RANKINGS,
  GET_WEEK_RANKINGS,
  GET_MONTH_RANKINGS,
  FILTER_PERIOD
} from './types';

const ROOT_URL = '/api/rankings?period=';

export function getRankings(period = 'week') {
  const request = axios.get(`${ROOT_URL}${period}`);
  let type;

  switch (period) {
    case 'day':
      type = GET_DAY_RANKINGS;
      break;
    case 'week':
      type = GET_WEEK_RANKINGS;
      break;
    case 'month':
      type = GET_MONTH_RANKINGS;
      break;
  }

  return {
    type,
    payload: request
  };
}

export function filterPeriod(period) {
  return {
    type: FILTER_PERIOD,
    payload: period
  };
}
