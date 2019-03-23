const createStore = require("./createStore.js");
const combineReducers = require("./combineReducers.js");

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
  return state;
};

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { text: action.payload.text, completed: false }];
    case "TOGGLE_TODO":
      return state.map((todo, index) => {
        if (index === action.payload.index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
  }
  return [...state];
};

const incrementAction = { type: "INCREMENT" };
const decrementAction = { type: "INCREMENT" };
const addTodoAction = {
  type: "ADD_TODO",
  payload: { text: "Clean apartment" }
};
const addTodoAction2 = {
  type: "ADD_TODO",
  payload: { text: "Finish homework" }
};
const completeTodoAction = { type: "TOGGLE_TODO", payload: { index: 0 } };

const rootReducer = combineReducers({
  count: countReducer,
  todos: todoReducer
});

const store = createStore(rootReducer);
unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(incrementAction);
store.dispatch(addTodoAction);
store.dispatch(decrementAction);
store.dispatch(addTodoAction2);
store.dispatch(completeTodoAction);
unsubscribe();