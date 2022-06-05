import React from "react";
import Loading from "@Components/Loading";
import Header from "@Containers/Header";
import ListArticle from "@Components/ListArticle";

function Init() {
  return (
    <div>
      {/* Página de inicio. <Loading type="dots" />  <Loading  /> */}
      <Header />
      <ListArticle
        articles={[
          {
            title: "Título del artículo",
            description: "Descripción del artículo",
            user: "user1",
          },
          {
            title: "Título del artículo",
            description: "Descripción del artículo",
            user: "user2",
          },
        ]}
      />
    </div>
  );
}

export default Init;
