/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const InputBox = ({
  title = "from",
  data = {},
  type = "usd",
  setType,
  input = "0",
  setInput = () => {},
}) => {
  return (
    <form
      onClick={(e) => {
        e.preventDefault();
      }}
      className="border-gray-900 shadow-lg border-2 p-5 rounded-lg mx-9  bg-gray-700 flex justify-between"
    >
      <label htmlFor="from-or-to" className="flex flex-col gap-7  ">
        {title}
        <input
          type="text"
          name="value"
          id="value"
          className="bg-gray-700 outline-none border-gray-800 px-1 border-2"
          // readOnly={title !== "from" ? true : false}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <label htmlFor="currency" className="flex flex-col gap-7">
        Currrency-Type
        <select
          id="currency"
          name="currency"
          className="bg-gray-700 outline-none border-gray-800 px-1 border-2"
          onChange={(e) => setType(e.target.value)}
          value={type}
        >
          {Object.keys(data).map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
};

// InputBox.propTypes = {
//   title: "from",
//   data: {},
// };
export default InputBox;
