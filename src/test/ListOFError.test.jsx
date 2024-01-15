import { vi, expect, describe, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import ListOFError from "../Page/ListOFError/ListOFError.jsx";
import { BrowserRouter } from "react-router-dom";

vi.mock("axios");
describe("ListOFError", () => {
  it("renders without crashing", () => {
    render(<ListOFError />);
    const ListOFErrorEl = screen.getByRole("ListOfError");
    expect(ListOFErrorEl).toBeInTheDocument();
  });

  it("displays the error list when the request is successful", async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        errors: ["Error 1", "Error 2", "Error 3"],
      },
    });

    render(
      <BrowserRouter>
        <ListOFError />
      </BrowserRouter>
    );

    // Додайте затримку перед пошуком тексту
    await waitFor(() => {
      expect(screen.getByTestId("error-render")).toBeInTheDocument();
    });
  });

  it("does not display the error list when the request fails", async () => {
    axios.get.mockRejectedValueOnce(new Error("Network Error"));

    render(
      <BrowserRouter>
        <ListOFError />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.queryByText("Error 1")).not.toBeInTheDocument();
      expect(screen.queryByText("Error 2")).not.toBeInTheDocument();
      expect(screen.queryByText("Error 3")).not.toBeInTheDocument();
    });
  });

  // Add more tests as needed...
});
