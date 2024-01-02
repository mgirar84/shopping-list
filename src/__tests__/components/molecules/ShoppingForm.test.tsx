import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ShoppingForm } from "../../../components/molecules";

const mockOnSubmit = jest.fn();

describe("ShoppingForm Component", () => {
  it("renders the form with input and button", () => {
    render(<ShoppingForm onSubmit={mockOnSubmit} />);
    screen.getByLabelText(/Item Name/i);
    screen.getByRole("button", { name: /Add item to Shopping List/i });
  });

  it("handles input change", () => {
    render(<ShoppingForm onSubmit={mockOnSubmit} />);
    const inputElement = screen.getByLabelText(/Item Name/i);
    const value = "New Item"

    fireEvent.change(inputElement, { target: { value } });

    expect(inputElement.value).toBe(value);
  });

  it("handles form submission with valid input", () => {
    render(<ShoppingForm onSubmit={mockOnSubmit} />);
    const inputElement = screen.getByLabelText(/Item Name/i);
    const buttonElement = screen.getByRole("button", {
      name: /Add item to Shopping List/i,
    });

    fireEvent.change(inputElement, { target: { value: "Valid Item" } });
    fireEvent.click(buttonElement);

    // Assert that the onSubmit callback is called with the correct arguments
    expect(mockOnSubmit).toHaveBeenCalledWith({
      name: "Valid Item",
      id: expect.any(String),
    });
  });

  it("displays error message with invalid input", () => {
    render(<ShoppingForm onSubmit={mockOnSubmit} />);
    const inputElement = screen.getByLabelText(/Item Name/i);
    const buttonElement = screen.getByRole("button", {
      name: /Add item to Shopping List/i,
    });

    fireEvent.change(inputElement, { target: { value: "Invalid123" } });
    fireEvent.click(buttonElement);

    // Assert that an error message is displayed

    screen.getByText(/Please enter a valid item name/i);
  });
});
