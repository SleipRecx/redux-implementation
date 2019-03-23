const compose = require("./compose.js");

const applyMiddleware = (...middlewares) => {
  return next => (reducer, initialState) => {
    const store = next(reducer, initialState);
    const chain = middlewares.map(middleware => middleware(store));
    let dispatch = store.dispatch;
    dispatch = compose(...chain)(store.dispatch);

    return { ...store, dispatch };
  };
};

module.exports = applyMiddleware;
