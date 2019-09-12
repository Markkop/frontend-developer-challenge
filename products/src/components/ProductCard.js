import React from "react";

const formatPrice = (price = 0) => {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
};

const ProductCard = ({ product }) => {
  formatPrice();

  return (
    <div className="productCard">
      <img alt={product.name} src={product.image} />
      <div>
        <p>{product.name}</p>
        <p>{product.description}</p>
      </div>
      <div>
        <p>De: {formatPrice(product.oldPrice)}</p>
        <p>Por: {formatPrice(product.price)}</p>
        <p>
          ou {product.installments.count}x de{" "}
          {formatPrice(product.installments.value)}
        </p>
      </div>
      <input className="buyButton" type="button" value="Comprar" />
    </div>
  );
};

export default ProductCard;
