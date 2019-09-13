import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`
      );
      setProducts(products => [...products, ...result.data.products]);
      setIsLoading(false);
    };
    fetchData();
  }, [page]);

  console.log(products);

  const loadMoreProducts = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };

  return (
    <section>
      <h2>Sua seleção especial</h2>
      <div className="productList">
        {products.map(product => {
          console.log(product);
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      <input
        className="moreProductsButton"
        type="button"
        value={
          isLoading ? "Carregando produtos..." : "Ainda mais produtos aqui"
        }
        onClick={() => loadMoreProducts()}
      />
    </section>
  );
};

export default Products;
