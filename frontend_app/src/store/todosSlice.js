/**
 * Todos slice using Redux Toolkit. Simple in-memory list demo.
 */
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: "t1", text: "Learn Redux basics", completed: false },
    { id: "t2", text: "Explore Redux Toolkit", completed: true },
  ],
  filter: "all", // all | active | completed
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // PUBLIC_INTERFACE
    addTodo: {
      /** Add a new todo with generated id */
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(text) {
        return { payload: { id: nanoid(), text, completed: false } };
      },
    },
    // PUBLIC_INTERFACE
    toggleTodo(state, action) {
      /** Toggle completed state of a todo by id */
      const todo = state.items.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    // PUBLIC_INTERFACE
    removeTodo(state, action) {
      /** Remove a todo by id */
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
    // PUBLIC_INTERFACE
    setFilter(state, action) {
      /** Set visibility filter: all | active | completed */
      state.filter = action.payload;
    },
    // PUBLIC_INTERFACE
    clearCompleted(state) {
      /** Remove all completed todos */
      state.items = state.items.filter((t) => !t.completed);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, setFilter, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer;
