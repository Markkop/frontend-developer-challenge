import React, { useState } from "react";
import { handleUnavailable } from "../../utils/handleUnavailable";

const formatPrice = (price = 0) => {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
};

const ProductCard = ({ product }) => {
  const buyText = "Comprar";
  const [buttonText, setButtonText] = useState(buyText);

  const { name, image, description, oldPrice, price, installments } = product;
  return (
    <div className="productCard">
      <img alt={name} src={image} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="pricesDiv">
        <h3>De: {formatPrice(oldPrice)}</h3>
        <p className="priceAfter">Por: {formatPrice(price)}</p>
        <h3>
          ou {installments.count}x de {formatPrice(installments.value)}
        </h3>
      </div>
      <input
        className="buyButton"
        type="button"
        value={buttonText}
        onClick={() => handleUnavailable(setButtonText, buyText)}
      />
    </div>
  );
};

ProductCard.defaultProps = {
  product: {
    name: "Name",
    image: "#",
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
