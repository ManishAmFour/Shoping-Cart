import { describe, it, expect, beforeEach } from "vitest";
import { fireEvent, getAllByTestId, getByTestId, render, screen } from "@testing-library/react"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MemoryRouter,Routes,Route } from "react-router-dom";
import GenerateProduct from "../src/components/differentLinks/GenerateProduct";
import { act } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
describe("quantity test", () => {
  it("updating the input values", async () => {
    const products = [0, 1, 2, 3, 4, 5, 6, 7, 9, 10];

    render(<GenerateProduct list={products} />);

    await waitFor(() => {

      expect(screen.getByText('Mens Casual Premium Slim Fit T-Shirts')).toBeInTheDocument()


  },{timeout: 3000});
  

  });
  });
  