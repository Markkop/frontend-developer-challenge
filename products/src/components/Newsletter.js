import React from "react";
import useForm from "../Hooks/useForm";

const Newsletter = () => {
  const registerNewsletter = () => {
    // Add register newsletter function here
    alert(JSON.stringify(values));
  };

  const { values, handleChange, handleSubmit } = useForm(registerNewsletter);

  return (
    <section>
      <h2>Compartilhe a novidade</h2>
      <p>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </p>
      <form onSubmit={handleSubmit}>
        {/* Convert this input to component */}
        <div className="inputContainer">
          <div className="inputField">
            <label htmlFor="name">Nome do amigo:</label>
            <input type="text" id="name" onChange={handleChange} required />
          </div>
          <div className="inputField">
            <label htmlFor="email">Email do amigo:</label>
            <input type="email" id="email" onChange={handleChange} required />
          </div>
        </div>
        <input className="button" type="submit" value="Enviar agora" />
      </form>
    </section>
  );
};

export default Newsletter;
