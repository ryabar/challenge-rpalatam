import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import News from "@Pages/News";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<News />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
