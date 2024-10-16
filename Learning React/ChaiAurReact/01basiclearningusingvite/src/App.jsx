// import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import useCustomHook from "./customHook/useCustomHook";
function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, error, loading] = useCustomHook(url);
  return (
    <>
      {loading && <p className="text-blue-700 text-3xl">Loading...</p>}
      {!loading && error != null && (
        <p className="text-red-700 text-3xl">{error.toString()}</p>
      )}
      {!loading && !error && (
        <ul>
          <h1 className="text-red-900 text-5xl rounded-2xl bg-white py-1 mb-2">
            Users Database
          </h1>
          {data.map((item) => (
            <li key={item.id}>
              <Card username={item.name} gmail={item.email} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
