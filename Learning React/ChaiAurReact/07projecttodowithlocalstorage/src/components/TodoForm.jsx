// import React from "react";
import { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const { addTodo } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    addTodo(title);
    setTitle("");
  };
  return (
    <form className="flex" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Write Todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        onClick={(e) => handleSubmit(e)}
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
