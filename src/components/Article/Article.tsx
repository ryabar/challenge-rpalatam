import React from "react";

import Title from "./TitleArticle";
import About from "./AboutArticle";
import User from "./UserArticle";

function Article() {
  return (
    <div className="article">
      <Title />
      <About />
      <User />
    </div>
  );
}

export default Article;
