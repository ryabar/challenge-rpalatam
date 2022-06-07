import fetchArticles from "@Services/articles";
import { IArticle } from "@Types/index";

// Filtrar los articulos por termino de busqueda
const searchArticles = (
  listArticles: IArticle[],
  searchTerm: string
): IArticle[] =>
  formatArticles(listArticles).filter((article: IArticle) =>
    article.title.includes(searchTerm)
  );

// Traer los articulos del localStorage
const getArticlesInLocalStorage = (): IArticle[] => {
  const articles = JSON.parse(localStorage.getItem("articles"));
  return articles ? articles : [];
};

// Traer todos los articulos del storage y fusionarlo con los obtenidos del servicio por el número de usuario indicado
const getArticlesStorageAndFetch = async (user: number) => {
  let articles = await getArticlesInLocalStorage();
  let articlesFetch = [];

  if (articles.length < user * 10 - 1) {
    articlesFetch = await fetchArticles(user);
    localStorage.setItem(
      "articles",
      JSON.stringify([...articles, ...articlesFetch])
    );
  }
  return [...articles, ...articlesFetch];
};

// Formatear los articulos obtenidos del servicio al tipado declarado para un Articulo (IArticle)
const formatArticles = (articles: any[]): IArticle[] => {
  return articles.map((article: any) => ({
    title: article.title,
    description: article.body,
    user: `user ${article.userId}`,
  }));
};

export {
  searchArticles,
  getArticlesStorageAndFetch,
  formatArticles,
  getArticlesInLocalStorage,
};
