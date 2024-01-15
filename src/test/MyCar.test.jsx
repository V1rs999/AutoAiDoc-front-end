import { vi, expect, describe, it } from "vitest";
import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import MyCar from "../Page/MyCar/MyCar.jsx";

describe("MyCar", () => {
  it("fetches car data on mount", async () => {
    const mockData = {
      digits: "1234",
      is_stolen: false,
      model: "Test Model",
      operations: [
        {
          address: "Test Address",
          color: { ua: "Test Color" },
          fuel: { ua: "Test Fuel" },
          own_weight: "Test Weight",
          total_weight: "Test Total Weight",
          registered_at: "Test Date",
          vendor: "Test Vendor",
        },
      ],
      model_year: "Test Year",
      region: { name_ua: "Test Region" },
      vin: "Test VIN",
      photo_url: "Test URL",
    };

    // Mock the axios.get function
    axios.get = vi.fn(() =>
      Promise.resolve({
        data: mockData,
      })
    );

    // Render the component
    const { getByText } = render(<MyCar />);

    // Wait for the component to update with the API data
    await waitFor(() => getByText(/Test Model/));

    // Check that the data is displayed correctly
    expect(getByText(/Test Model/)).toBeInTheDocument();
    // Add more assertions as needed for the rest of the data
  });
});
