/**
 * Combines multiple reducers into a single reducer
 *
 * @param {Object} An object containing multiple reducer functions
 *
 * @returns {Function} Combined reducer
 *
 */

const combineReducers = reducers => {
    return (state = {}, action) => {
      return Object.keys(reducers).reduce((result, key) => {
        return { ...result, [key]: reducers[key](state[key], action) }
      }, {});
    };
  };

module.exports = combineReducers;