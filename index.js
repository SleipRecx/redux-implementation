// Import createStore and combineReducers from redux implementation
const createStore = require("./src/redux").createStore;
const combineReducers = require("./src/redux").combineReducers;
const applyMiddleware = require("./src/redux").applyMiddleware;

// Import reducers
const counter = require("./src/reducers.js").counter;
const todos = require("./src/reducers.js").todos;

// import action creators
const increment = require("./src/actionCreators").increment;
const decrement = require("./src/actionCreators").decrement;
const addTodo = require("./src/actionCreators").addTodo;
const toggleTodo = require("./src/actionCreators").toggleTodo;


const asyncIncrement = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    },1000)
  }
}

// Import middleware
const ensureFSA = require("./src/middleware").ensureFSA
const thunk = require("./src/middleware").thunk
const logger = require("./src/middleware").logger



// Combine Reducers
const rootReducer = combineReducers({
  counter,
  todos
});

// Create store and apply middleware
const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger, ensureFSA));

// Subscribe to store changes
// const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch actions
store.dispatch(asyncIncrement());
// Unsubscribe from store changes
// unsubscribe();
