import React from "react";

const formatPrice = (price = 0) => {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
};

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <img alt={product.name} src={product.image} />
      <div>
        <h3 className="productTitle">{product.name}</h3>
        <p>{product.description}</p>
      </div>
      <div className="pricesDiv">
        <p>De: {formatPrice(product.oldPrice)}</p>
        <p className="priceAfter">Por: {formatPrice(product.price)}</p>
        <p>
          ou {product.installments.count}x de{" "}
          {formatPrice(product.installments.value)}
        </p>
      </div>
      <input className="buyButton" type="button" value="Comprar" />
    </div>
  );
};

ProductCard.defaultProps = {
  product: {
    name: "Name",
    description: "Description",
    oldPrice: "10",
    price: "5",
    installments: {
      count: 1,
      value: 5
    }
  }
};

export default ProductCard;
