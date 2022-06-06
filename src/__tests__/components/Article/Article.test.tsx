import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Article from "@Components/Article";

describe("test cases for article component", () => {
  test("should render in the document", () => {
    render(<Article title="title1" description="description1" user="user1" />);
    expect(screen.getByText("title1")).toBeInTheDocument();
    expect(screen.getByText("description1")).toBeInTheDocument();
    expect(screen.getByText("user1")).toBeInTheDocument();

    const buttonReadMore = screen.getByText("Leer más");
    fireEvent.click(buttonReadMore);
  });
});
