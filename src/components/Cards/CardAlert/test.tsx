import { render } from "@testing-library/react";
import CardAlert from ".";

const props = {
  title: "Lorem ipsum",
  description: "Test",
  image: "/images/monthyly.png",
  link: "/test",
};

describe("CardAlert", () => {
  it("should render the card alert", () => {
    const { container } = render(<CardAlert cardAlert={props} />);

    expect(container).toMatchSnapshot();
  });

  it("click on card alert", () => {
    const { getByText } = render(<CardAlert cardAlert={props} />);

    expect(getByText("Lorem ipsum")).toBeInTheDocument();
    expect(getByText("Test")).toBeInTheDocument();
  });
});
