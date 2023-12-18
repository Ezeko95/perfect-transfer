import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Landing from "../src/app/components/Landing";
import { describe } from "node:test";

describe("Landing", () => {
  it("renders without crashing", () => {
    render(<Landing />);
    const header = screen.getByRole("heading");
    const headerText =
      "Convertimos la impresión en una experiencia de primera categoría.";
    expect(header).toHaveTextContent(headerText);
  });

  it("renders the correct products link", () => {
    render(<Landing />);
    const link = screen.getByRole("link", { name: "Productos" });
    expect(link).toBeInTheDocument();
  });

  it("renders the correct contact link", () => {
    render(<Landing />);
    const link = screen.getByRole("link", { name: "Contacto" });
    expect(link).toBeInTheDocument();
  });

  it("renders the correct background image", () => {
    const { container } = render(<Landing />);
    const backgroundImageDiv = container.querySelector(".bg-cover.bg-center");

    expect(backgroundImageDiv).toHaveStyle({
      backgroundImage: 'url("/background.jpg")',
    });
  });
});
