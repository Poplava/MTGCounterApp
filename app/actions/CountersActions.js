import * as CountersActionTypes from '../constants/CountersActionTypes';

export function increment(index) {
  return {
    type: CountersActionTypes.COUNTERS_INCREMENT,
    index
  };
}

export function decrement(index) {
  return {
    type: CountersActionTypes.COUNTERS_DECREMENT,
    index
  };
}

export function reset() {
  return {
    type: CountersActionTypes.COUNTERS_RESET
  };
}

export function changeDefault() {
  return {
    type: CountersActionTypes.COUNTERS_CHANGE_DEFAULT
  };
}
