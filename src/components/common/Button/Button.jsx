import React from "react";

const Button = ({ name, className, type, handler }) => {
  return (
    <button className={className} type={type} onClick={handler}>
      {name}
    </button>
  );
};

export default Button;
