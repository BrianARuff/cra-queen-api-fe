import "@testing-library/jest-dom";
import * as rctl from "@testing-library/react";
import BrandButton from "./BrandButton";

describe("BrandButton should", () => {
  it("render", () => {
    const handleLyricsLength = () => {};
    const wrapper = rctl.render(
      <BrandButton handleLyricsLength={handleLyricsLength} />
    );
    const button = wrapper.getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe("Show More Lyrics");
  });
});
