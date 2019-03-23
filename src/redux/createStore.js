/**
 * Creates a Redux store that holds the state tree.
 *
 * @param {Function} reducer, A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {Object} preloadedState, The initial state
 *
 * @returns {Object} store, A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 *
 */

const createStore = (reducer, preloadedState, enhancer) => {
  if (enhancer) {
    return enhancer(createStore)(reducer, preloadedState);
  }

  let currentState = preloadedState;
  let currentReducer = reducer;
  const listeners = [];

  const getState = () => {
    return currentState;
  };

  const dispatch = action => {
    currentState = currentReducer(currentState, action);
    listeners.forEach(listener => listener());
    return action;
  };

  const subscribe = listener => {
    listeners.push(listener);
    const unsubscribe = () => {
      listners = listeners.filter(l => l !== listener);
    };
    return unsubscribe;
  };

  const replaceReducer = nextReducer => {
    currentReducer = nextReducer;
    dispatch({ type: "redux/INIT" });
  };

  dispatch({ type: "redux/INIT" });
  return { getState, dispatch, subscribe, replaceReducer };
};

module.exports = createStore;
