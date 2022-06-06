import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Loading from "@Components/Loading";

describe("test cases for loading component", () => {
  test("should render loading basic", () => {
    render(<Loading />);
    waitFor(() => {
      const loadingDiv = screen.findByRole("div");
      expect(loadingDiv).toHaveAttribute("class", "loading");
    });
  });

  test("should render loading dots", () => {
    const { findByRole } = render(<Loading type="dots" />);
    waitFor(() => {
      const loadingDiv = findByRole("div");
      expect(loadingDiv).toHaveAttribute("class", "loading--dots");
    });
  });
});
