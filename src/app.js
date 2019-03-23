// Import createStore and combineReducers from redux implementation
const createStore = require("./redux").createStore;
const combineReducers = require("./redux").combineReducers;

// Import reducers
const countReducer = require("./reducers.js").countReducer;
const todoReducer = require("./reducers.js").todoReducer;

// import action creators
const increment = require("./actionCreators").increment;
const decrement = require("./actionCreators").decrement;
const addTodo = require("./actionCreators").addTodo;
const toggleTodo = require("./actionCreators").toggleTodo;

// Combine Reducers
const rootReducer = combineReducers({
  count: countReducer,
  todos: todoReducer
});

// Create store and subscribe to store
const store = createStore(rootReducer, {});

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
