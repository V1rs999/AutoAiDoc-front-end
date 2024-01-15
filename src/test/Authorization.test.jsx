import { vi, expect, describe, it } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import Authorization from "../Page/Authorization/Authorization.jsx";
import { BrowserRouter } from "react-router-dom";

describe("Authorization", () => {
  it("submits form data on button click", async () => {
    const mockData = {
      email: "romadraguca@gmail.com",
      password: "Tmdaez09",
    };

    // Mock the axios.post function
    axios.post = vi.fn().mockResolvedValue({
      data: mockData,
    });

    // Render the component
    const { getByPlaceholderText, getByText } = render(
      <BrowserRouter>
        <Authorization />
      </BrowserRouter>
    );

    fireEvent.change(getByPlaceholderText("Email Address"), {
      target: { value: mockData.email },
    });
    fireEvent.change(getByPlaceholderText("Password"), {
      target: { value: mockData.password },
    });

    // Submit the form
    fireEvent.click(getByText("Log in"));

    await waitFor(() =>
      expect(axios.post).toHaveBeenCalledWith(
        "https://localhost:7189/Authorization",
        mockData
      )
    );
  });
});
