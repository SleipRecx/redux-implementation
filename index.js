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

// Import middleware
const ensureFSA = require("./src/middleware")

// Combine Reducers
const rootReducer = combineReducers({
  counter,
  todos
});


// Create store and apply middleware
const store = createStore(rootReducer, {}, applyMiddleware(ensureFSA));
//console.log(store.dispatch.toString())

// Subscribe to store changes
const logCurrentStateTree = () => console.log(store.getState());
const unsubscribe = store.subscribe(logCurrentStateTree);

// Dispatch actions
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(addTodo("Clean apartment"));
const id = store.getState().todos[0].id;
store.dispatch(toggleTodo(id));
store.dispatch(toggleTodo(id));

// Unsubscribe from store chngaes
unsubscribe();
