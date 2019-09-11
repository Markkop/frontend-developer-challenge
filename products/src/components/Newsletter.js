import React from "react";

const Newsletter = () => {
  return (
    <>
      <h1>Compartilhe a novidade</h1>
      <p>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </p>
      <form>
        <label htmlFor="name">Nome do amigo:</label>
        <input type="text" id="name" />
        <label htmlFor="email">Nome do amigo:</label>
        <input type="text" id="email" />
        <input type="button" value="Enviar agora" />
      </form>
    </>
  );
};

export default Newsletter;
