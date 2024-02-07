import { render } from "@testing-library/react";
import CardRank from "./";

const props = {
  title: "Test",
  tag: "V3",
  process: [
    {
      id: 1,
      title: "Test",
      progress: "2/5",
    },
  ],
};

describe("CardRank", () => {
  it("should render the card rank", () => {
    const { container } = render(<CardRank cardRank={props} />);

    expect(container).toMatchSnapshot();
  });
});
