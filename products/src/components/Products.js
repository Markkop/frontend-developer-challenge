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

  const loadMoreProducts = (pagesForward = 1) => {
    const nextPage = page + pagesForward;
    setPage(nextPage);
  };

  return (
    <section id="products">
      <h2>Sua seleção especial</h2>
      <div className="productList">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <input
        className="moreButton"
        type="button"
        value={
          isLoading ? "Carregando produtos..." : "Ainda mais produtos aqui"
        }
        onClick={() => loadMoreProducts(1)}
      />
    </section>
  );
};

export default Products;
