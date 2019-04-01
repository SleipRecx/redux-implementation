const isFSA = require("flux-standard-action").isFSA;

const ensureFSA = () => next => action => {
  if (!isFSA(action)) {
    throw new Error(
      "Dispatched action is not a flux standard action" +
        "See https://github.com/redux-utilities/flux-standard-action for more details."
    );
  }
  next(action);
};

const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }
  return next(action);
};

const logger = ({ getState }) => next => action => {
  console.log("Previous State:");
  console.log(getState());
  console.log("Action:");
  console.log(action);
  const returnValue = next(action);
  console.log("Next State:");
  console.log(getState());
  return returnValue;
};

module.exports = {
  ensureFSA,
  thunk,
  logger
};
