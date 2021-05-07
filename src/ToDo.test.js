import React from "react";
import { render, fireEvent, queryByText } from "@testing-library/react";
import ToDo from "./ToDo";

//smoke test
test("renders without crashing", function () {
  render(<ToDo />);
});

//snapshot
test("matches snapshot", function () {
  const { asFragment } = render(<ToDo />);
  expect(asFragment()).toMatchSnapshot();
});
