import { expect, describe, it } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/react";
import DropFile from "../Page/DropFile/Drop.jsx";
import { BrowserRouter } from "react-router-dom";

describe("DropFile", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <DropFile />
      </BrowserRouter>
    );
    expect(getByRole("img")).toBeInTheDocument();
  });

  it("opens the instruction modal when image is clicked", async () => {
    const { getByRole } = render(
      <BrowserRouter>
        <DropFile />
      </BrowserRouter>
    );

    // Assuming the role attribute for the image is "img"
    fireEvent.click(getByRole("img"));

    // Assuming the role attribute for the modal section is "button"
    await waitFor(() => {
      expect(getByRole("button", { name: "instruction" })).toBeInTheDocument();
    });
  });

  it("closes the instruction modal when onDestroy is called", () => {
    const { getByRole, queryByRole } = render(
      <BrowserRouter>
        <DropFile />
      </BrowserRouter>
    );

    // Click on the button to open the modal
    fireEvent.click(getByRole("button"));

    // Find and click the close button within the modal
    const closeButton = getByRole("button", { name: "X" }); // Adjust the name accordingly
    fireEvent.click(closeButton);

    // Ensure the modal is closed
    expect(queryByRole("dialog")).toBeNull();
  });
});
