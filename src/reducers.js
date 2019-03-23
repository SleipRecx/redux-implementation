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

module.exports = {
    countReducer,
    todoReducer
}