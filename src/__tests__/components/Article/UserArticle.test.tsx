import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import UserArticle from "@Components/Article/UserArticle";

describe("test cases for userArticle component", () => {
  test("should render in the document", () => {
    render(<UserArticle user="user1" />);
    expect(screen.getByText("user1")).toBeInTheDocument();
    expect(screen.getByText("user1")).toHaveAttribute("class", "article__user");
  });
});
