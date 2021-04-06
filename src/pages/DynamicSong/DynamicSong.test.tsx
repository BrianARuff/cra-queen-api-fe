import * as rctl from "@testing-library/react";
import "@testing-library/jest-dom";
import DynamicSong from "./DynamicSong";

describe("DynamicSong Component Page", () => {
  it("should render", () => {
    const wrapper = rctl.render(<DynamicSong />);
    const loadingText = wrapper.getByText(/Loading.../i);
    expect(loadingText).toBeInTheDocument();
  });
});
