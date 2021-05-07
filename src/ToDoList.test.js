import React from "react";
import { render, fireEvent, queryByText } from "@testing-library/react";
import ToDoList from "./ToDoList";

//smoke test
test("renders without crashing", function () {
  render(<ToDoList />);
});

//snapshot
test("matches snapshot", function () {
  const { asFragment } = render(<ToDoList />);
  expect(asFragment()).toMatchSnapshot();
});
