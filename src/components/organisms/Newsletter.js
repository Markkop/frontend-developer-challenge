import React from "react";
import useForm from "../../hooks/useForm";
import FormInput from "../atom/FormInput";

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
              id: "name",
              label: "Nome do amigo"
            },
            {
              type: "email",
              id: "email",
              label: "Email do amigo"
            }
          ].map(({ type, id, label }) => (
            <FormInput
              key={id}
              type={type}
              id={id}
              label={label}
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
