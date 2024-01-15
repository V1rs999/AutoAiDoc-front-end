import { vi, it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Slider from "../Page/Welcome/component/Slider/Slider.jsx";
import Features from "../Page/Welcome/component/Features/Features.jsx";
import Welcome from "../Page/Welcome/Welcome.jsx";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { LogOut } from "../Page/Welcome/Welcome.jsx";

vi.mock("axios");
describe("render Welcome component", () => {
  it("renders Welcome", () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );
    const WelcomeEl = screen.getByRole("root");
    expect(WelcomeEl).toBeInTheDocument();
  });
  it("renders Slider", () => {
    render(<Slider />);
    const SliderEl = screen.getByRole("slider");
    expect(SliderEl).toBeInTheDocument();
  });
  it("renders Features", () => {
    render(<Features />);
    const FeaturesEl = screen.getByRole("Features");
    expect(FeaturesEl).toBeInTheDocument();
  });
  it("renders button (ButtListOfError && ButtAiDiagnostics)", () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );
    const linksbuttEl = screen.getByRole("linksbutt");
    expect(linksbuttEl).toBeInTheDocument();
  });
});

describe("Logout Service", () => {
  it("makes a POST request to logout", async () => {
    const mockResponse = { data: "Success logout" };
    axios.post.mockResolvedValue(mockResponse);

    const response = await LogOut();

    expect(axios.post).toHaveBeenCalledWith("https://localhost:7189/Logout");
    expect(response.data).toBe("Success logout");
  });
});
