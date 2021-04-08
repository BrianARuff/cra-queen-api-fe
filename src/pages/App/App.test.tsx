import * as rctl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { waitFor, render, screen } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(screen.getByTestId("loadingTextw")).toBeInTheDocument();
  });
});
