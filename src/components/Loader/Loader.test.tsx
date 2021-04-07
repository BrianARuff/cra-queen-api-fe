import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Loader from "./Loader";

describe("Loader", () => {
  it("shoulder render without crashing", () => {
    const wrapper = render(<Loader />);
    const loaderDiv = wrapper.getByTestId("loader-line");
    expect(loaderDiv).toBeInTheDocument();
  });
});
