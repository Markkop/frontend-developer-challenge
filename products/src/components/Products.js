import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const Products = () => {
  const [data, setData] = useState({ hits: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(
        "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1"
      );
      setData(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <header>
      <h1>Products</h1>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        data.products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </header>
  );
};

export default Products;
