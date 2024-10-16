/* eslint-disable react/prop-types */
import React, { useId } from "react";

const DropdownMenu = React.forwardRef(function DropdownMenu(
  { options = [], label, className, ...props },
  ref
) {
  const id = useId();
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <select
        id={id}
        ref={ref}
        {...props}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {options &&
          options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
});

export default DropdownMenu;
