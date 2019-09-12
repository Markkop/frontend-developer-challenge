import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const Products = () => {
  const [data, setData] = useState({ products: [] });
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
  return (
    <section>
      <h2>Sua seleção especial</h2>
      <div className="productList">
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          data.products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
      <input type="button" value="Ainda mais produtos aqui!" />>
    </section>
  );
};

export default Products;
