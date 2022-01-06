import React from "react";
import { useForm } from "react-hook-form";

const Input = (props) => {
  const {
    name,
    type = "text",
    placeholder = "Student Name",
    defaultValue,
    handleChange,
  } = props;
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        defaultValue={defaultValue}
        className="form-control mb-4"
        required
      />

    </>
  );
};

export default Input;
