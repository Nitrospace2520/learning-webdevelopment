/* eslint-disable react/prop-types */

const Button = ({
  label = "Submit",
  type = "button",
  backGroundColor = "bg-blue-300",
  textColor = "text-black",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      className={` py-2 ${backGroundColor} ${textColor} ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
