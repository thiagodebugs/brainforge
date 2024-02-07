import { render } from "@testing-library/react";
import Menu from "./";

describe("Menu", () => {
  it("should render the menu", () => {
    const { container } = render(<Menu />);

    expect(container).toMatchSnapshot();
  });

  it("click buttons", () => {
    const { getByText } = render(<Menu />);

    expect(getByText("Início")).toBeInTheDocument();
    expect(getByText("Plano de Carreira")).toBeInTheDocument();
    expect(getByText("Vagas")).toBeInTheDocument();
    expect(getByText("Processos")).toBeInTheDocument();
    expect(getByText("PowerBI")).toBeInTheDocument();
  });
});
