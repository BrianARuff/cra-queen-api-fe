import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders loading text to document", async () => {
    render(<App />);
    const loadingText = await screen.findByText("Loading...");
    await expect(loadingText).toBeInTheDocument();
  });
});
