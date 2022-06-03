import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Init from "@Pages/Init";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Init />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
