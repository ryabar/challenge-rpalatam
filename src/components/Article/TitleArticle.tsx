import React from "react";
import { ITitleArticle as TitleArticleProps } from "@Types/index";

function TitleArticle({ title }: TitleArticleProps) {
  return <h2 className="article__title">{title}</h2>;
}

export default TitleArticle;
