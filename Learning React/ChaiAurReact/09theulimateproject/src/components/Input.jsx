/* eslint-disable react/prop-types */
import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  {
    label,
    placeHolder = "Enter text",
    type = "text",
    className = "text-black",
    ...props
  },
  ref
) {
  const id = useId();
  return (
    <div>
      {label && (
        <label htmlFor={id} className="inline-block mb-1 pl-1">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeHolder}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none foucs:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        id={id}
        {...props}
      />
    </div>
  );
});

export default Input;
