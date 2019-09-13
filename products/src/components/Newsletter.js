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
        {/* Convert this input to component */}
        <div className="inputContainer">
          <div className="inputField">
            <label htmlFor="name">Nome do amigo:</label>
            <input type="text" id="name" />
          </div>
          <div className="inputField">
            <label htmlFor="email">Email do amigo:</label>
            <input type="text" id="email" />
          </div>
        </div>
        <input className="button" type="submit" value="Enviar agora" />
      </form>
    </section>
  );
};

export default Newsletter;
