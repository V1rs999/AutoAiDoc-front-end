import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Logo from "../Page/Header/component/Logo/Logo.jsx";
import Nav from "../Page/Header/component/Nav/Nav.jsx";
import Search from "../Page/Header/component/Search/Search.jsx";
import Header from "../Page/Header/Header.jsx";
import { BrowserRouter } from "react-router-dom";
describe("render Header component", () => {
  it("renders Header", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const HeaderEl = screen.getByRole("Header");
    expect(HeaderEl).toBeInTheDocument();
  });
  it("renders Logo", () => {
    render(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
    );
    const LogoEl = screen.getByRole("Logo");
    expect(LogoEl).toBeInTheDocument();
  });
  it("renders Features", () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
    const NavEl = screen.getByRole("Nav");
    expect(NavEl).toBeInTheDocument();
  });
  it("renders button (ButtListOfError && ButtAiDiagnostics)", () => {
    render(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );
    const SearchEl = screen.getByRole("Search");
    expect(SearchEl).toBeInTheDocument();
  });
});
