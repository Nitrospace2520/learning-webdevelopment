import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./app/store.js";
import { Provider } from "react-redux";
import { fetchUsers } from "./features/users/usersSlice.js";
import { fetchPosts } from "./features/posts/postsSlice.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AddPost,
  PostsList,
  SinglePostPage,
  EditPost,
} from "./features/posts/index.js";
import { Home } from "./components/index.js";
store.dispatch(fetchUsers());
store.dispatch(fetchPosts());

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "posts", element: <PostsList /> },
      { path: "posts/:postId", element: <SinglePostPage /> },
      { path: "add-post", element: <AddPost /> },
      { path: "edit-post/:postId", element: <EditPost /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
