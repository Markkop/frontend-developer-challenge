import React from "react";

const Newsletter = () => {
  return (
    <section>
      <h2>Compartilhe a novidade</h2>
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
    </section>
  );
};

export default Newsletter;
