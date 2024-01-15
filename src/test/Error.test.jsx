import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ErrorPage from "../Page/Error/Error.jsx";
import { BrowserRouter } from "react-router-dom";
describe("render ErrorPage component", () => {
  it("renders ErrorPage", () => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );
    const ErrorPageEl = screen.getByRole("ErrorPage");
    expect(ErrorPageEl).toBeInTheDocument();
  });
});
