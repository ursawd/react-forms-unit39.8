import React from "react";
import { render, fireEvent, queryByText } from "@testing-library/react";
import App from "./App";
//smoke test
test("renders without crashing", function () {
  render(<App />);
});

//snapshot
test("matches snapshot", function () {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

test("has title", function () {
  const { queryByText } = render(<App />);
  expect(queryByText("Todo List")).toBeInTheDocument();
});
