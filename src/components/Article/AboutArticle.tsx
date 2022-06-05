import React from "react";
import { IAboutArticle as AboutArticleProps } from "@Types/index";

function AboutArticle({ description }: AboutArticleProps) {
  return <p className="article__about">{description}</p>;
}

export default AboutArticle;
