/**
 * Creates a Redux store that holds the state tree.
 *
 * @param {Function} reducer, A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {Object} preloadedState, The initial state
 *
 * @returns {Object} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 *
 */

const createStore = (reducer, preloadedState) => {
  let currentState = preloadedState;
  const listeners = [];

  const getState = () => {
    return currentState;
  };

  const dispatch = action => {
    currentState = reducer(currentState, action);
    listeners.forEach(listener => listener());
    return action;
  };

  const subscribe = listener => {
    listeners.push(listener);
    const unsubscribe = () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
    return unsubscribe;
  };

  dispatch({ type: "redux/INIT" });
  return { getState, dispatch, subscribe };
};

module.exports = createStore;
