import React from "react";
import useForm from "../Hooks/useForm";
import FormInput from "./FormInput";

const Newsletter = () => {
  const registerNewsletter = () => {
    // Add register newsletter function here
    alert(JSON.stringify(values));
  };

  const { values, handleChange, handleSubmit } = useForm(registerNewsletter);

  return (
    <section id="newsletter">
      <h2>Compartilhe a novidade</h2>
      <p>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          {[
            {
              type: "text",
              id: "name"
            },
            {
              type: "email",
              id: "email"
            }
          ].map(({ type, id }) => (
            <FormInput
              key={id}
              type={type}
              id={id}
              handleChange={handleChange}
            />
          ))}
        </div>
        <input type="submit" value="Enviar agora" />
      </form>
    </section>
  );
};

export default Newsletter;
