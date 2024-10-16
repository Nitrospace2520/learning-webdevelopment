import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./features/api/apiSlice.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./components/Home.jsx";
import TodoList from "./features/todos/TodoList.jsx";
import QuoteList from "./features/quotes/QuoteList.jsx";
import AddTodo from "./features/todos/AddTodo.jsx";
import AddQuote from "./features/quotes/AddQuote.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "todos", element: <TodoList /> },
      { path: "quotes", element: <QuoteList /> },
      { path: "add-todo", element: <AddTodo /> },
      { path: "add-quote", element: <AddQuote /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <RouterProvider router={router} />
    </ApiProvider>
  </React.StrictMode>
);
