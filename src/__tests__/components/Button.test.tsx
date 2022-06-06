import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "@Components/Button";

describe("test cases for button without cssCustom", () => {
  let onClick: jest.Mock;

  beforeEach(() => {
    onClick = jest.fn();
    render(<Button onClick={onClick} text="Leer más" />);
  });

  test("should render button in the document ", () => {
    const button = screen.getByText("Leer más");
    expect(button).toBeInTheDocument();
  });

  test("should call the onClick callback when the button is pressed", () => {
    fireEvent.click(screen.getByText("Leer más"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe("test cases for button with cssCustom", () => {
  let onClick: jest.Mock;

  beforeEach(() => {
    onClick = jest.fn();
    render(
      <Button onClick={onClick} text="Leer más" cssCustom="button--dark" />
    );
  });

  test("should have the custom class added to it", () => {
    const button = screen.getByText("Leer más");
    expect(button).toHaveClass("button button--dark");
  });
});
