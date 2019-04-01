const compose = require("./compose.js");

/**
 * Wraps stores dispatch function
 *
 * @param {Function} Middlewares to be applied.
 *
 * @returns {Object} New store object with a wrapped dispatch.
 *
 */
const applyMiddleware = (...middlewares) => createStore => (...storeArgs) => {
  const store = createStore(...storeArgs);
  const chain = middlewares.map(middleware =>
    middleware({
      getState: store.getState,
      dispatch: action => dispatch(action)
    })
  );
  const dispatch = compose(...chain)(store.dispatch);
  return { ...store, dispatch };
};

module.exports = applyMiddleware;
