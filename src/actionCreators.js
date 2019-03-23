let nextTodoId = 0;
const addTodo = text => {
  return {
    type: "ADD_TODO",
    payload: {
      id: nextTodoId++,
      text
    }
  };
};

const toggleTodo = id => {
  return {
    type: "TOGGLE_TODO",
    payload: {
      id
    }
  };
};

const increment = () => {
  return { type: "INCREMENT" };
};
const decrement = () => {
  return { type: "DECREMENT" };
};

module.exports = {
  addTodo,
  toggleTodo,
  increment,
  decrement
};
