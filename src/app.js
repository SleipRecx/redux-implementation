const createStore = require("./redux").createStore;
const combineReducers = require("./redux").combineReducers;

const countReducer = require("./reducers.js").countReducer;
const todoReducer = require("./reducers.js").todoReducer;

// Counter actions
const incrementAction = { type: "INCREMENT" };
const decrementAction = { type: "DECREMENT" };

// Todo actions
const addTodoAction = {
  type: "ADD_TODO",
  payload: { text: "Clean apartment" }
};
const completeTodoAction = {
  type: "TOGGLE_TODO",
  payload: { index: 0 }
};

// Combine Reducers
const rootReducer = combineReducers({
  count: countReducer,
  todos: todoReducer
});

// Create store and subscribe to store
const store = createStore(rootReducer, {});
unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch actions
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(decrementAction);
store.dispatch(addTodoAction);
store.dispatch(completeTodoAction);

// Unsubscribe
unsubscribe();
