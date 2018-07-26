import axios from 'axios';
import {
  GET_DAY_RANKINGS,
  GET_WEEK_RANKINGS,
  GET_MONTH_RANKINGS,
  FILTER_PERIOD
} from './types';

const ROOT_URL = '/api/rankings?period=';

// TODO - refactor getRankings action creators as one function that returns payload of object
// Object will have property with key of the period, and value of the rankings
// i.e. payload: { week: [...] }


export function getDayRankings() {
  const request = axios.get(`${ROOT_URL}day`);

  return {
    type: GET_DAY_RANKINGS,
    payload: request
  };
}

export function getWeekRankings() {
  const request = axios.get(`${ROOT_URL}week`);

  return {
    type: GET_WEEK_RANKINGS,
    payload: request
  };
}

export function getMonthRankings() {
  const request = axios.get(`${ROOT_URL}month`);

  return {
    type: GET_MONTH_RANKINGS,
    payload: request
  };
}

export function filterPeriod(period) {
  return {
    type: FILTER_PERIOD,
    payload: period
  };
}
