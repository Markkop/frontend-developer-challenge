import React from "react";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <>
      <img alt={product.name} src={product.img} />
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>De: {product.oldPrice}</p>
      <p>Por: {product.price}</p>
    </>
  );
};

export default ProductCard;
