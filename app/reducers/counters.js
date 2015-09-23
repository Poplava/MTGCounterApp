import * as CountersActionTypes from '../constants/CountersActionTypes';

const VALUES = [10, 20, 30, 40, 50];
const defaultValue = VALUES[1];

const initialState = {
  defaultValue,
  counters: [
    {
      value: defaultValue,
      rotate: true
    },
    {
      value: defaultValue,
      rotate: false
    }
  ]
};

export default function counters(state = initialState, action = {}) {
  switch (action.type) {
    case CountersActionTypes.COUNTERS_INCREMENT:
      return Object.assign({}, state, {
        counters: state.counters.map((counter, index) => {
          return index === action.index ?
            Object.assign({}, counter, {
              value: counter.value + 1
            }) : counter;
        })
      });

    case CountersActionTypes.COUNTERS_DECREMENT:
      return Object.assign({}, state, {
        counters: state.counters.map((counter, index) => {
          return index === action.index ?
            Object.assign({}, counter, {
              value: counter.value - 1
            }) : counter;
        })
      });

    case CountersActionTypes.COUNTERS_RESET:
      return Object.assign({}, state, {
        counters: state.counters.map((counter, index) => {
          return Object.assign({}, counter, {
            value: state.defaultValue
          });
        })
      });

    case CountersActionTypes.COUNTERS_CHANGE_DEFAULT:
      let index = VALUES.indexOf(state.defaultValue);

      if (++index >= VALUES.length) {
        index = 0;
      }

      return Object.assign({}, state, {
        defaultValue: VALUES[index]
      });

    default:
      return state;
  }
}
