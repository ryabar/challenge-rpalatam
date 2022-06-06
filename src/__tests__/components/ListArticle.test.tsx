import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ListArticle from "@Components/ListArticle";

describe("test cases for listArticle component", () => {
  const articles = [
    {
      title: "title 1",
      description: "description 1",
      user: "user 1",
    },
    {
      title: "title 2",
      description: "description 2",
      user: "user 2",
    },
    {
      title: "title 3",
      description: "description 3",
      user: "user 3",
    },
  ];

  test("should render to the document", () => {
    render(<ListArticle articles={articles} />);
    expect(screen.getByText("title 1")).toBeInTheDocument();
    expect(screen.getByText("title 2")).toBeInTheDocument();
    expect(screen.getByText("title 3")).toBeInTheDocument();
  });
});
