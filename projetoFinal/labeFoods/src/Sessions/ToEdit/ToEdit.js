import axios from "axios";
import { BASE_URL } from "../../Constants/Url";
import { goToProfile } from "../../Router/Coordinate";
import React, { useState, useEffect } from "react";
import useForm from "../../Hooks/useForm";
import { Formulario } from "styled";

export const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ToEdit = () => {
  const { form, onChangeInput, clear } = useForm({
    name: "",
    email: "",
    cpf: "",
  });

  const updateProfile = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      email: form.email,
      cpf: form.cpf,
    };

    axios
      .put(`${BASE_URL}/profile`, body, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        alert("Perfil editado com sucesso!");
      })

      .catch((err) => {
        console.log(err);
        alert("Tente novamente!");
      });

    clear();
  };

  return (
    <Formulario>
      <form onSubmit={updateProfile}>
        <input
          name="name"
          value={form.name}
          placeholder={"name"}
          onChange={onChangeInput}
          required
        />

        <input
          name="email"
          placeholder={"email"}
          value={form.email}
          onChange={onChangeInput}
          required
        />

        <input
          name="cpf"
          placeholder={"cpf"}
          value={form.cpf}
          onChange={onChangeInput}
          required
        />

        <button>Enviar</button>
      </form>
    </Formulario>
  );
};

export default ToEdit;
