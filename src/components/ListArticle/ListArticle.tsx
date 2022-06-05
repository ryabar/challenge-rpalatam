import React from "react";
import { IListArticle as ListArticleProps } from "@Types/index";

import Article from "@Components/Article";

function ListArticle({ articles }: ListArticleProps) {
  return (
    <div className="list-article">
      {articles.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          description={article.description}
          user={article.user}
        />
      ))}
    </div>
  );
}

export default ListArticle;
