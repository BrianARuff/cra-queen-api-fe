import * as rctl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

//@ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        value: "Jesus",
      }),
  })
);

describe.only("App", () => {
  it("loads the songs on render", async () => {
    await rctl.act(async () => {
      await rctl.render(<App />).debug();
      rctl.screen.debug();
    });
  });
});
