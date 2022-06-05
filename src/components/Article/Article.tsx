import React from "react";
import { IArticle as ArticleProps } from "@Types/index";

import Title from "./TitleArticle";
import About from "./AboutArticle";
import User from "./UserArticle";

function Article({ title, description, user }: ArticleProps) {
  return (
    <div className="article">
      <Title title={title} />
      <About description={description} />
      <User user={user} />
    </div>
  );
}

export default Article;
