import React from "react";
import NavButton from "../atom/NavButton";

const links = [
  { text: "Conheça a Linx", url: "https://www.linx.com.br/" },
  { text: "Ajude o algorítimo", url: "#" },
  { text: "Seus produtos", url: "#products" },
  { text: "Compartilhe", url: "#newsletter" }
];

const NavBar = () => (
  <nav>
    {links.map(({ text, url }) => (
      <NavButton key={text} text={text} url={url} />
    ))}
  </nav>
);

export default NavBar;
