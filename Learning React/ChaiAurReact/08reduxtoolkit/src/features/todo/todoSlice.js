/* eslint-disable no-unused-vars */
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "TodoList",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(1108),
        title: action.payload?.text,
        isCompleted: false,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload?.id
      );
    },

    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload?.id
          ? { ...todo, title: action.payload?.text }
          : todo
      );
    },
    toggleComplete: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload?.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleComplete } =
  todoSlice.actions;

export default todoSlice.reducer;
