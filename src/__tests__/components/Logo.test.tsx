import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Logo from "@Components/Logo";

describe("test cases for logo component", () => {
  test("should render in the document", () => {
    const { findByRole } = render(<Logo />);
    waitFor(() => {
      expect(findByRole("h3")).toBeInTheDocument();
      expect(findByRole("h3")).toHaveAttribute("class", "logo");
    });
  });
});
