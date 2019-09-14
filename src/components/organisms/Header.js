import React from "react";
import NavBar from "../molecule/NavBar";

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
      <NavBar />
    </header>
  );
};

export default Header;
