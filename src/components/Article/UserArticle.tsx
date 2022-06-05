import React from "react";
import { IUserArticle as UserArticleProps } from "@Types/index";

function UserArticle({ user }: UserArticleProps) {
  return <span className="article__user">{user}</span>;
}

export default UserArticle;
