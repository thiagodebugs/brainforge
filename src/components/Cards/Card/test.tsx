import { render } from "@testing-library/react";
import Card from ".";

const props = {
  title: "Lorem ipsum",
  icon: "mdiCard",
  description: "Test",
  link: "/test",
};

describe("Card", () => {
  it("should render the card", () => {
    const { container } = render(<Card card={props} />);

    expect(container).toMatchSnapshot();
  });

  it("click on card", () => {
    const { getByText } = render(<Card card={props} />);

    expect(getByText("Lorem ipsum")).toBeInTheDocument();
    expect(getByText("Test")).toBeInTheDocument();
  });
});
