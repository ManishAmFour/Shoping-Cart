import { useState } from "react";
import GenerateProduct from "./GenerateProduct";

const AllProducts = () => {
  const products = [0, 1, 2, 3, 4, 5, 6, 7, 9, 10];

  return <GenerateProduct list={products} />;
};

export default AllProducts;
