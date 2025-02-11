import { describe, it, expect, beforeEach } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MemoryRouter,Routes,Route } from "react-router-dom";
import HomePage from "../src/components/Home";
import SaleProducts from "../src/components/differentLinks/SaleProducts";
import CartDisplay from "../src/components/displayProd";
import AllProducts from "../src/components/differentLinks/AllProducts";
describe("Home Screen test",()=>{

    beforeEach(()=>{

       render (<MemoryRouter initialEntries={["/"]}> 
            <Routes >
                <Route path="/" element={<HomePage/>} />
                <Route path="/displayProd" element={<CartDisplay/>} />
                <Route path="/SaleProducts" element={<SaleProducts/>} />
                <Route path="/AllProducts" element={<AllProducts/>} />
            </Routes>
        </MemoryRouter>)

})

    it("Home Page existence test",()=>{
        expect(screen.getByText("Discount Products")).toBeInTheDocument()
        
    })

    it("component rendering on interaction", async()=>{

       

         let   link = screen.getByText("All products")
         fireEvent.click(link)
         await waitFor(()=>{

            expect(screen.getByText("Mens Cotton Jacket")).toBeInTheDocument();


        },{timeout: 3000})







    })




})