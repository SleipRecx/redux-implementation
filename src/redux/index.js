const createStore = require("./createStore.js");
const combineReducers = require("./combineReducers.js");
const applyMiddleware = require("./applyMiddleware.js");
const compose = require("./compose.js");

module.exports = {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
};
