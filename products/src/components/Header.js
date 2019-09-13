import React from "react";
import NavButton from "./NavButton";

const links = [
  { text: "Conheça a Linx", url: "https://www.linx.com.br/" },
  { text: "Ajude o algorítimo", url: "#" },
  { text: "Seus produtos", url: "#products" },
  { text: "Compartilhe", url: "#newsletter" }
];

const Header = () => {
  return (
    <header>
      <div>
        <p>uma seleção de produtos</p>
        <p>especial para você</p>
        <h3>
          Todos os produtos desta lista foram selecionados a partir da sua
          navegação. Aproveite!
        </h3>
      </div>
      <nav>
        {links.map(({ text, url }) => (
          <NavButton key={text} text={text} url={url} />
        ))}
      </nav>
    </header>
  );
};

export default Header;
