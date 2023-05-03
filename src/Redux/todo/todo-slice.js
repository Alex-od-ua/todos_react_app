import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { act } from "react-dom/test-utils";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    addTodo(state, action) {
      console.log(state);
      console.log(action);
      state.todos.push({ id: nanoid(), text: action.payload.text, completed: false });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoCompleted(state, action) {
      const toggledTodo = state.todos.find((todo) => todo.id === action.payload.id);
      console.log(toggledTodo);

      toggledTodo.completed = !toggledTodo.completed;
    },
  },
});

export const { addTodo, removeTodo, toggleTodoCompleted } = todoSlice.actions;

export default todoSlice.reducer;
