import React from "react";
import useGetProducts from "../customHooks/useGetProducts";

const ProductsList = () => {
  const [loadingProducts, products] = useGetProducts({});

  console.log("--- loadingProducts", loadingProducts, products);

  return <h1>ProductsList</h1>;
};

export default ProductsList;
