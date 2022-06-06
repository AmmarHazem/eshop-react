import { useEffect, useState } from "react";
import axios from "../utils/axios";

const useGetProducts = ({ limit = 10, offset = 0 }) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/products", {
          params: {
            limit,
            offset,
          },
        });
        setProducts(response.data.products);
      } catch (e) {
        console.log("--- useGetProducts error", e);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [offset, limit]);

  return [loading, products];
};

export default useGetProducts;
