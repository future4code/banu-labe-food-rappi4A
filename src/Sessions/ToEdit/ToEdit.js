import axios from "axios";
import { BASE_URL } from "../../Constants/Url";
import { goToProfile } from "../../Router/Coordinate";
import React, { useState, useEffect } from "react";
import useForm from "../../Hooks/useForm";
import styled from "styled-components";

const FormCard = styled.div`
  width: 360px;
  height: 640px;
  padding: 0 0 294px;
`;

const Card = styled.div`
  width: 360px;
  height: 64px;
  margin: 0 0 16px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;

const Input1 = styled.div`
  width: 328px;
  height: 56px;
  margin: 8px 0 0;
  padding: 19px 48px 19px 16px;
  border-radius: 4px;
  border: solid 1px #b8b8b8;
`;

const Input2 = styled.div`
  width: 328px;
  height: 56px;
  margin: 8px 0 0;
  padding: 19px 48px 19px 16px;
  border-radius: 4px;
  border: solid 1px #b8b8b8;
`;

const Input3 = styled.div`
  width: 328px;
  height: 56px;
  margin: 8px 0 0;
  padding: 19px 48px 19px 16px;
  border-radius: 4px;
  border: solid 1px #b8b8b8;
`;

const H1 = styled.div`
  width: 360px;
  height: 640px;
  padding: 0 0 294px;
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
    <Card>
      <H1>Editar</H1>
      <FormCard>
        <form onSubmit={updateProfile}>
          <Input1>
            <input
              name="name"
              value={form.name}
              placeholder={"name"}
              onChange={onChangeInput}
              required
            />
          </Input1>

          <Input2>
            <input
              name="email"
              placeholder={"email"}
              value={form.email}
              onChange={onChangeInput}
              required
            />
          </Input2>

          <Input3>
            <input
              name="cpf"
              placeholder={"cpf"}
              value={form.cpf}
              onChange={onChangeInput}
              required
            />
          </Input3>

          <button>Enviar</button>
        </form>
      </FormCard>
    </Card>
  );
};

export default ToEdit;
