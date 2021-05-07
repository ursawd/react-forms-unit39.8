import React from "react";
import { render, fireEvent, queryByText } from "@testing-library/react";
import NewToDoForm from "./NewToDoForm";

//smoke test
test("renders without crashing", function () {
  render(<NewToDoForm />);
});

//snapshot
test("matches snapshot", function () {
  const { asFragment } = render(<NewToDoForm />);
  expect(asFragment()).toMatchSnapshot();
});

test("should add new Todo", function () {
  const { queryByText, queryByPlaceholderText } = render(<NewToDoForm />);
  const input = queryByPlaceholderText("Enter new ToDo here...");
  const btn = queryByText("Add New ToDo");
  fireEvent.change(input, { target: { value: "Walk Dog" } });
  fireEvent.click(btn);
  expect(queryByText("Walk Dog")).toBeInTheDocument();
});
