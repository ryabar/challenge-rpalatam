import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Header from "@Containers/Header";

describe("test cases for header container", () => {
  const onChange = jest.fn();
  const valueSearch = "valueText";

  beforeEach(() => {
    render(<Header onChange={onChange} valueSearch={valueSearch} />);
  });

  test("should render in the document", () => {
    waitFor(() => {
      expect(screen.findByRole("h3")).toHaveAttribute("class", "logo");
    });
    expect(screen.getByPlaceholderText("Buscar")).toBeInTheDocument();
  });

  test("should validate use onChange callback", () => {
    const input = screen.getByPlaceholderText("Buscar");
    fireEvent.change(input, { target: { value: "textNewForSearch" } });
    expect(onChange).toHaveBeenCalledTimes(1);
    waitFor(() => {
      expect(input).toHaveValue("textNewForSearch");
    });
  });
});
