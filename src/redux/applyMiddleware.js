const compose = require("./compose.js");

const applyMiddleware = (...middlewares) => {
  return next => (reducer, initialState) => {
    var store = next(reducer, initialState);
    var dispatch = store.dispatch;
    var chain = [];

    chain = middlewares.map(middleware =>
      middleware({
        getState: store.getState,
        dispatch: action => dispatch(action)
      })
    );
    dispatch = compose(...chain)(store.dispatch);

    return { ...store, dispatch };
  };
};

module.exports = applyMiddleware;
