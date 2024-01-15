import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Logo from "../Page/Header/component/Logo/Logo.jsx";
import Nav from "../Page/Footer/component/Nav/Nav.jsx";
import Footer from "../Page/Footer/Footer.jsx";
import { BrowserRouter } from "react-router-dom";
describe("render Footer component", () => {
  it("renders Footer", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const HeaderEl = screen.getByRole("Footer");
    expect(HeaderEl).toBeInTheDocument();
  });
  it("renders Logo Footer", () => {
    render(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
    );
    const LogoEl = screen.getByRole("Logo");
    expect(LogoEl).toBeInTheDocument();
  });
  it("renders Nav Footer", () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
    const NavEl = screen.getByRole("Nav");
    expect(NavEl).toBeInTheDocument();
  });
});
