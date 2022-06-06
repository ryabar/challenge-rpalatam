import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import Input from "@Components/Input";

describe("test cases for input component", () => {
  let onChange: jest.Mock;
  let value: string = "valueText";
  let name: string = "nameText";
  let placeholder: string = "placeholderText";

  beforeEach(() => {
    onChange = jest.fn();
    render(
      <Input
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
      />
    );
  });

  test("should render input in the document", () => {
    const input = screen.getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();
  });

  test("should validate use onChange callback", () => {
    const input = screen.getByPlaceholderText(placeholder);
    fireEvent.change(input, { target: { value: "newValue" } });
    expect(onChange).toHaveBeenCalledTimes(1);
    waitFor(() => {
      expect(input).toHaveValue("newValue");
    });
  });
});
