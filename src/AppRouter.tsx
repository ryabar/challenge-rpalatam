import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ROUTES from "@Routes/index";

import News from "@Pages/News";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.NEWS} element={<News />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
