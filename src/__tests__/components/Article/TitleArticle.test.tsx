import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TitleArticle from "@Components/Article/TitleArticle";

describe("test cases for titleArticle component", () => {
  test("should render in the document", () => {
    render(<TitleArticle title="titleValue" />);
    expect(screen.getByText("titleValue")).toBeInTheDocument();
    expect(screen.getByText("titleValue")).toHaveAttribute(
      "class",
      "article__title"
    );
  });
});
