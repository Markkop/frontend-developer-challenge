import React from "react";

// Convert these styles to proper CSS
const style = {
  background: "#707070 0% 0% no-repeat padding-box",
  border: "1px solid #707070",
  opacity: 1
};

const p1Stlye = {
  top: "69",
  left: "635px",
  width: "227px",
  height: "23px",
  textAlign: "left",
  font: "Regular 20px/24px Helvetica Neue",
  letterSpacing: 0,
  color: "#FFFFFF",
  opacity: 1
};

const Header = () => {
  return (
    <header style={style}>
      <div>
        <p style={p1Stlye}>uma seleção de produtos</p>
        <p>especial para você</p>
        <p>
          Todos os produtos desta lista foram selecionados a partir da sua
          navegação. Aproveite!
        </p>
      </div>
      <div>
        <input type="button" value="Conheça a Linx" />
        <input type="button" value="Ajude o algorítimo" />
        <input type="button" value="Seus produtos" />
        <input type="button" value="Compartilhe" />
      </div>
    </header>
  );
};

export default Header;
