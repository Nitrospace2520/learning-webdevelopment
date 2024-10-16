import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useAddTodoMutation } from "../api/apiSlice";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const [addTodo] = useAddTodoMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;

    addTodo({
      userId: 1,
      title: todo,
      completed: false,
    });
    setTodo("");
  };
  return (
    <div>
      <h1>Add Todo List</h1>
      <form
        action="/todos"
        method="post"
        style={{ backgroundColor: "lightgray", padding: "10px" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="todo">Todo : </label>
        <input
          type="text"
          value={todo}
          placeholder="Add Todo List"
          onChange={(e) => setTodo(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "5px 10px",
          }}
          onClick={handleSubmit}
        >
          <FontAwesomeIcon icon={faUpload} />
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
