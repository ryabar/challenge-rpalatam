import React, { useContext } from "react";
// import Context from "@Context/index";

import Logo from "@Components/Logo";
import Input from "@Components/Input";

function Header({ onChange, valueSearch }: any) {
  // const { textSearch, updateTextSearch } = useContext(Context);

  return (
    <div className="header">
      {/* {console.log("textSearch", textSearch)} */}
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
