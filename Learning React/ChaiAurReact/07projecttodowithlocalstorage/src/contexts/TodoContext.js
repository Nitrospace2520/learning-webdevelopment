/* eslint-disable no-unused-vars */
import { useContext, createContext } from "react";

export const TODOContext = createContext({
  todos: [
    {
      id: 1,
      title: "code",
      isCompleted: false,
    },
  ],
  addTodo: (title) => {},
  updateTodo: (id, newTitle) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TODOContextProvider = TODOContext.Provider;

export const useTodoContext = () => useContext(TODOContext);
