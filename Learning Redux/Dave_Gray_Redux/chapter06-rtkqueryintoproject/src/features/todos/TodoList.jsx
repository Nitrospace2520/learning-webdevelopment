/* eslint-disable no-unused-vars */
import TodoCard from "./TodoCard.jsx";
import { useGetTodosQuery } from "../api/apiSlice.js";

const TodoList = () => {
  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();

  return (
    <div>
      <h1>Todo List</h1>
      {isLoading && <p>Loading...</p>}
      {isSuccess && todos && (
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Title</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <TodoCard key={todo.id} todo={todo} />
            ))}
          </tbody>
        </table>
      )}
      {isError && <p>Error: {error}</p>}
    </div>
  );
};

export default TodoList;
