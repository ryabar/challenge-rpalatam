import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AboutArticle from "@Components/Article/AboutArticle";

describe("test cases for aboutArticle component", () => {
  test("should render in the document", () => {
    render(<AboutArticle description="descriptionValue" />);
    expect(screen.getByText("descriptionValue")).toBeInTheDocument();
    expect(screen.getByText("descriptionValue")).toHaveAttribute(
      "class",
      "article__about"
    );
  });
});
