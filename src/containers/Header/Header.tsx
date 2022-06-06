import React from "react";
import { IHeader as HeaderProps } from "@Types/index";

import Logo from "@Components/Logo";
import Input from "@Components/Input";

function Header({ onChange, valueSearch }: HeaderProps) {
  return (
    <div className="header">
      <Logo />
      <Input
        name="seach"
        placeholder="Buscar"
        onChange={onChange}
        value={valueSearch}
      />
    </div>
  );
}

export default Header;
