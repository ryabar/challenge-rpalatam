import React from "react";
import { IInput as InputProps } from "@Types/index";

function Input({ onChange, value, name, placeholder }: InputProps) {
  return (
    <input
      type="text"
      onChange={onChange}
      value={value}
      name={name}
      placeholder={placeholder}
    />
  );
}

export default Input;
