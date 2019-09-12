import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <img alt={product.name} src={product.image} />
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>De: {product.oldPrice}</p>
      <p>Por: {product.price}</p>
      <input type="button" value="Comprar" />
    </div>
  );
};

export default ProductCard;
