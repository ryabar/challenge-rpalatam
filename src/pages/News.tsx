import React, { useState, useEffect } from "react";
import Loading from "@Components/Loading";
import Header from "@Containers/Header";
import ListArticle from "@Components/ListArticle";
import useInfiniteScroll from "@Hooks/useInfiniteScroll";
import {
  searchArticles,
  getArticlesInLocalStorage,
  formatArticles,
  getArticlesStorageAndFetch,
} from "@Utils/index";

function News() {
  const [valueSearch, setValueSearch] = useState("");
  const [listArticles, setListArticles] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(getArticlesForScroll);

  function getArticlesForScroll() {
    let user = Math.round((getArticlesInLocalStorage().length + 1) / 10) + 1;
    if (user >= 1 && user <= 10) getArticles(user);
  }

  useEffect(() => {
    getArticles(1);
  }, []);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setValueSearch(searchTerm);

    if (searchTerm === "") {
      getArticles(1);
      return;
    }

    setListArticles(searchArticles(getArticlesInLocalStorage(), searchTerm));
  };

  const getArticles = async (user: number) => {
    const articles = await getArticlesStorageAndFetch(user);
    setListArticles(formatArticles(articles));
    setIsFetching(false);
  };

  return (
    <div className="news">
      <Header onChange={handleChangeSearch} valueSearch={valueSearch} />
      <ListArticle articles={listArticles} />
      {isFetching && <Loading type="dots" />}
    </div>
  );
}

export default News;
