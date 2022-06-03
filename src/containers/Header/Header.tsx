import React, { useContext } from "react";
import Context from "@Context/index";

import Logo from "@Components/Logo";
import Input from "@Components/Input";

function Header() {
  const { textSearch, updateTextSearch } = useContext(Context);

  return (
    <div className="header">
      {console.log("textSearch", textSearch)}
      <Logo />
      {/* <Input name="seach" placeholder="Buscar" /> */}
    </div>
  );
}

export default Header;
