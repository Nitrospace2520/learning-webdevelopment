import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
const AddTodo = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    dispatch(addTodo({ text: title }));
    // addTodo(title);
    // console.log(title);
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

export default AddTodo;
