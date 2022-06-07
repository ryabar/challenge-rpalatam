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

// El id usuario con el que se desea iniciar el listado de articulos
const userInit = 1;

function News() {
  const [valueSearch, setValueSearch] = useState("");
  const [listArticles, setListArticles] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(getArticlesForScroll);

  useEffect(() => {
    getArticles(userInit);
  }, []);

  // Callback scroll, permite calcular el usuario siguiente y traer sus articulos
  function getArticlesForScroll() {
    let user = Math.round((getArticlesInLocalStorage().length + 1) / 10) + 1;
    if (user >= 1 && user <= 10) getArticles(user);
  }

  // Manejador de busqueda de un termino sobre los titulos de los articulos y actualizar la lista de articulos a mostrar
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setValueSearch(searchTerm);
    // Caso: El  usuario borra su busqueda, debería listar todos los articulos almacenados en el localStorage
    if (searchTerm === "") {
      getArticles(userInit);
      return;
    }
    // Caso: El usuario escribe su termino de busqueda, deberia filtrarse por el titulo del array de articulos almacenados y encontrar las coincidencias
    setListArticles(searchArticles(getArticlesInLocalStorage(), searchTerm));
  };

  // Traer todos los articulos almancenados en el localStorage y adicionar los nuevos articulos por usuario a través de la API
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
