import React from "react";
import { IArticle as ArticleProps } from "@Types/index";

import Title from "./TitleArticle";
import About from "./AboutArticle";
import User from "./UserArticle";
import Button from "@Components/Button";

function Article({ title, description, user }: ArticleProps) {
  const handleClickReadMore = () => {
    console.log("click en leer más");
  };

  return (
    <div className="article">
      <div className="article__content">
        <Title title={title} />
        <About description={description} />
        <User user={user} />
      </div>
      <Button text="Leer más" onClick={handleClickReadMore} />
    </div>
  );
}

export default Article;
