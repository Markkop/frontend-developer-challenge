import React from "react";

const Header = () => {
  return (
    <header>
      <div>
        <p>uma seleção de produtos</p>
        <p>especial para você</p>
        <p>
          Todos os produtos desta lista foram selecionados a partir da sua
          navegação. Aproveite!
        </p>
      </div>
      <nav>
        <a href="google.com" class="button">
          <button>Google</button>
        </a>
        <input
          type="button"
          value="Conheça a Linx"
          onclick='location.href = "http://google.com"'
        />
        <input type="button" value="Ajude o algorítimo" />
        <input type="button" value="Seus produtos" />
        <input type="button" value="Compartilhe" />
      </nav>
    </header>
  );
};

export default Header;
