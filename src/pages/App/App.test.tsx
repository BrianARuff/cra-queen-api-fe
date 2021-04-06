import * as rctl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("App", () => {
  test("renders", async () => {
    const wrapper = rctl.render(<App />);
    const loadingText = wrapper.getByTestId("loadingText");
    expect(loadingText).toBeInTheDocument();
  });
});
