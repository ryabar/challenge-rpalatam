import React, { useState, useEffect } from "react";
// import Loading from "@Components/Loading";
import Header from "@Containers/Header";
import ListArticle from "@Components/ListArticle";
import useInfiniteScroll from "@Hooks/useInfiniteScroll";

function News() {
  const [valueSearch, setValueSearch] = useState("");
  const [listArticles, setListArticles] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(getArticlesForScroll);

  function getArticlesForScroll() {
    console.log("getArticlesForScroll");

    let user = Math.round((getArticlesInLocalStorage().length + 1) / 10) + 1;
    console.log(
      "getArticlesForScroll user: ",
      getArticlesInLocalStorage().length + 1
    );

    if (user >= 1 && user <= 10) getArticles(user);
  }

  useEffect(() => {
    getArticles(1);
  }, []);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueSearch(e.target.value);

    if (e.target.value === "") {
      getArticles(1);
      return;
    }

    const articles = searchArticles(e.target.value);
    setListArticles(articles);
  };

  const searchArticles = (text: string) => {
    let articles = listArticles.filter((article: any) =>
      article.title.includes(text)
    );
    return articles;
  };

  const getArticlesInLocalStorage = () => {
    const articles = JSON.parse(localStorage.getItem("articles"));
    return articles ? articles : [];
  };

  const fetchArticles = async (user: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${user}/posts`
    );
    return await response.json();
  };

  const getArticles = async (user: number) => {
    let articles = await getArticlesInLocalStorage();
    let articlesFetch = [];

    if (articles.length < user * 10 - 1) {
      articlesFetch = await fetchArticles(user);
      localStorage.setItem(
        "articles",
        JSON.stringify([...articles, ...articlesFetch])
      );
    }

    setListArticles(
      [...articles, ...articlesFetch].map((article: any) => ({
        title: article.title,
        description: article.body,
        user: `user ${article.userId}`,
      }))
    );

    setIsFetching(false);
  };

  return (
    <div className="news">
      <Header onChange={handleChangeSearch} valueSearch={valueSearch} />
      <ListArticle articles={listArticles} />
    </div>
  );
}

export default News;
