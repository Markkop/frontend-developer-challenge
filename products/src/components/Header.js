import React from "react";

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
        <a href="http://a.a">
          <button className="navButton">Conheça a Linx</button>
        </a>
        <a href="http://a.a">
          <button className="navButton">Ajude o algorítimo</button>
        </a>
        <a href="http://a.a">
          <button className="navButton">Seus produtos</button>
        </a>
        <a href="http://a.a">
          <button className="navButton">Compartilhe</button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
