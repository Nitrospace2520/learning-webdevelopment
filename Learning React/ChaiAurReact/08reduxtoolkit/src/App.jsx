// import { useEffect, useState } from "react";
import { AddTodo, ListTodo } from "./components";
import { useSelector } from "react-redux";
function App() {
  /* const [todos, setTodos] = useState(useSelector((state) => state.todos));
  useEffect(() => {
    const newtodos = JSON.parse(localStorage.getItem("todo-lists"));
    // if (!newtodos && newtodos > 0) setTodos(newtodos);
  }, []);
  useEffect(() => {
    // if (todos.length == 0) return;
    localStorage.setItem("tood-lists", JSON.stringify(todos));
  }, [todos]); */
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <h1 className="text-3xl bg-[#123] text-[#f5f] p-1 text-center">
        Hello Redux Toolkit
      </h1>
      <div className="bg-[#122] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <AddTodo />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos && todos.length > 0 && (
              <ul className="w-full">
                {todos.map((todo) => (
                  <li key={todo.id}>
                    <ListTodo todo={todo} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
