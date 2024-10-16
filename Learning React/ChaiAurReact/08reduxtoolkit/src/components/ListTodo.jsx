/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-empty-pattern */
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  editTodo,
  toggleComplete,
  deleteTodo,
} from "../features/todo/todoSlice";

function ListTodo({ todo }) {
  const [todoMsg, setTodoMsg] = useState(todo.title);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const dispatch = useDispatch();
  return (
    <div
      className={`flex justify-center items-center border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.isCompleted}
        onChange={() => dispatch(toggleComplete({ id: todo.id }))}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.isCompleted ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.isCompleted) return;

          if (isTodoEditable) {
            dispatch(editTodo({ id: todo.id, text: todoMsg }));
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.isCompleted}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => dispatch(deleteTodo({ id: todo.id }))}
      >
        ❌
      </button>
    </div>
  );
}

export default ListTodo;
