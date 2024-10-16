/* eslint-disable no-unused-vars */
import { useTodoContext, TODOContextProvider } from "./contexts/TodoContext";
import { useState, useEffect } from "react";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  useState(() => {
    const todoList = JSON.parse(localStorage.getItem("todoLists"));
    if (todoList && todoList.length > 0) setTodos(todoList);
  }, []);
  useEffect(() => {
    localStorage.setItem("todoLists", JSON.stringify(todos));
  }, [todos]);
  const addTodo = (title) => {
    let newId = todos.length != 0 ? todos[todos.length - 1]["id"] + 1 : 1;
    let newTodoItem = { id: newId, title: title, isCompleted: false };
    setTodos((prev) => [...prev, newTodoItem]);
    // console.log(title, newId, todos);
  };
  const updateTodo = (id, newTitle) => {
    const todoList = todos.map((item) =>
      item.id === id ? { ...item, title: newTitle } : item
    );
    setTodos(todoList);
  };
  const deleteTodo = (id) => {
    const todoList = todos.filter((item) => item.id !== id);
    setTodos(todoList);
  };
  const toggleComplete = (id) => {
    const todoList = todos.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(todoList);
  };

  return (
    <TODOContextProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#122] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos && todos.length > 0 && (
              <ul className="w-full">
                {todos.map((todo) => (
                  <li key={todo.id}>
                    <TodoItem todo={todo} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </TODOContextProvider>
  );
}

export default App;
