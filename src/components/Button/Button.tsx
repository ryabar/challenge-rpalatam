import React, { useMemo } from "react";
import { IButton as ButtonProps } from "@Types/index";

function Button({ onClick, text, cssCustom }: ButtonProps) {
  const cssDefined = useMemo(
    () => (cssCustom ? `button ${cssCustom}` : "button"),
    [cssCustom]
  );

  return <button className={cssDefined} onClick={onClick}>{text}</button>;
}

export default Button;
