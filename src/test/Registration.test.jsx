import { vi, expect, describe, it } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import Registration from "../Page/Registration/Registration.jsx";
import { BrowserRouter } from "react-router-dom";

describe("Registration", () => {
  it("submits form data on button click", async () => {
    const mockData = {
      username: "test",
      email: "test@gmail.com",
      password: "Tmdaez09",
      confirmPassword: "Tmdaez09",
    };

    // Mock the axios.post function
    axios.post = vi.fn().mockResolvedValue({
      data: mockData,
    });

    // Render the component
    const { getByPlaceholderText, getByText } = render(
      <BrowserRouter>
        <Registration />
      </BrowserRouter>
    );

    fireEvent.change(getByPlaceholderText("Email Address"), {
      target: { value: mockData.email },
    });
    fireEvent.change(getByPlaceholderText("Password"), {
      target: { value: mockData.password },
    });
    fireEvent.change(getByPlaceholderText("Name"), {
      target: { value: mockData.username },
    });
    fireEvent.change(getByPlaceholderText("Confirm Password"), {
      target: { value: mockData.confirmPassword },
    });

    // Submit the form
    fireEvent.click(getByText("Register"));

    // Wait for any asynchronous actions to complete
    await waitFor(() =>
      expect(axios.post).toHaveBeenCalledWith(
        "https://localhost:7189/Registration",
        mockData
      )
    );
  });
});
