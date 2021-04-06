import FilterSongs from "./FilterSongs";
import * as rctl from "@testing-library/react";
import "@testing-library/jest-dom";

describe("FilterSongs component should", () => {
  it("render appropriately", () => {
    function handleFilterSongs(e: React.BaseSyntheticEvent) {}
    const wrapper = rctl.render(
      <FilterSongs handleFilterSongs={handleFilterSongs} />
    );
    const input = wrapper.getByTestId("input");
    expect(input).toBeInTheDocument();
  });
});
