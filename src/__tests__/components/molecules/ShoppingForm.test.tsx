import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ShoppingForm } from "../../../components/molecules";
import { isItemValid } from '../../../utils';

const mockOnSubmit = jest.fn();

jest.mock("../../../utils");

describe("ShoppingForm Component", () => {
  it("renders the form with input and button", () => {
    render(<ShoppingForm onSubmit={mockOnSubmit} />);
    screen.getByLabelText(/Item Name/i);
    screen.getByRole("button", { name: /Add item to Shopping List/i });
  });

  it("handles input change", () => {
    render(<ShoppingForm onSubmit={mockOnSubmit} />);
    const inputElement = screen.getByRole("textbox", { name: /Item Name/i });
    const value = "New Item";

    fireEvent.change(inputElement, { target: { value } });

    expect((inputElement as HTMLInputElement).value).toBe(value);
  });

  it("handles form submission with valid input", () => {
    (isItemValid as jest.Mock).mockReturnValue(true);
    render(<ShoppingForm onSubmit={mockOnSubmit} />);

    const inputElement = screen.getByRole("textbox", { name: /Item Name/i });
    const buttonElement = screen.getByRole("button", {
      name: /Add item to Shopping List/i,
    });

    fireEvent.change(inputElement, { target: { value: "Valid Item" } });
    fireEvent.click(buttonElement);

    expect(mockOnSubmit).toHaveBeenCalledWith({
      name: "Valid Item",
      id: expect.any(String),
    });
  });

  it("displays error message with invalid input", () => {
    (isItemValid as jest.Mock).mockReturnValue(false);
    render(<ShoppingForm onSubmit={mockOnSubmit} />);
    const inputElement = screen.getByRole("textbox", { name: /Item Name/i });
    const buttonElement = screen.getByRole("button", {
      name: /Add item to Shopping List/i,
    });

    fireEvent.change(inputElement, { target: { value: "Invalid123" } });
    fireEvent.click(buttonElement);

    screen.getByRole("alert");
  });
});
