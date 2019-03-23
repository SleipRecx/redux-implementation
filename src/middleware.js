const isFSA = require("flux-standard-action").isFSA;

const ensureFSA = () => next => action => {
  if (process.env.NODE_ENV !== "production") {
    if (!isFSA(action)) {
      throw new Error(
        "Dispatched action is not a flux standard action" +
          "See https://github.com/redux-utilities/flux-standard-action for more details."
      );
    }
  }
  next(action);
};

export { ensureFSA };

module.exports = ensureFSA;