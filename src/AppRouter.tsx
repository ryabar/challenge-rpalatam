import * as React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Context from "@Context/index";

import Init from "@Pages/Init";

function AppRouter() {
  const [loadingFetch, setLoadingFetch] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [textSearch, setTextSearch] = useState("");

  const updateLoadingFetch = (status: boolean) => setLoadingFetch(status);
  const updateLoadingSearch = (status: boolean) => setLoadingSearch(status);
  const updateTextSearch = (text: string) => setTextSearch(text);

  return (
    <Context.Provider
      value={{
        loadingFetch,
        loadingSearch,
        updateLoadingFetch,
        updateLoadingSearch,
        textSearch,
        updateTextSearch,
      }}
    >
      <Router>
        <Routes>
          <Route path={"/"} element={<Init />} />
        </Routes>
      </Router>
    </Context.Provider>
  );
}

export default AppRouter;
