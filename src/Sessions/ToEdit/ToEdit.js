import axios from "axios";
import { BASE_URL } from "../../Constants/Url";
import { goToProfile } from "../../Router/Coordinate";
import React, { useState, useEffect } from "react";
import useForm from "../../Hooks/useForm";
import styled from "styled-components";
import back from "../../assets/back.png";

const Title = styled.div`
  width: 175px;
  height: 44px;
  margin: 20px 92px 0 54px;
  padding: 13px 67.5px 12px;
`;
const BackImg = styled.div`
  width: 23px;
  height: 24px;
  margin: 10px 54px 10px 16px;
  object-fit: contain;
`;

const Bar = styled.div`
  width: 360px;
  height: 64px;
  margin: 0 0 16px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;

const EditarCadastro = styled.div`
  width: 360px;
  height: 640px;
  padding: 0 0 294px;
`;

const Reactangle = styled.div`
  width: 328px;
  height: 56px;
  margin: 8px 0 0;
  padding: 19px 48px 19px 16px;
  border-radius: 4px;
  border: solid 1px #b8b8b8;
`;

const input = styled.div`
  width: 264px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000;
`;

const label = styled.div`
  width: 78px;
  height: 18px;
  margin: 3px 234px 43px 16px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`;

const Retangulo = styled.div`
  width: 328px;
  height: 42px;
  padding: 12px 16px;
  border-radius: 2px;
  background-color: var(--dark-peach);
`;

const button = styled.div`
  width: 296px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000;
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
      })

      .catch((err) => {
        console.log(err);
        alert("Tente novamente!");
      });

    clear();
  };

  return (
    <EditarCadastro>
      <Bar>
        <Title>Editar</Title>
        <BackImg src={back} alt="back" />
      </Bar>

      <form onSubmit={updateProfile}>
        <Reactangle>
          <label>Nome:</label>
          <input
            name="name"
            value={form.name}
            placeholder={"Bruna Oliveira"}
            onChange={onChangeInput}
            required
          />
        </Reactangle>

        <Reactangle>
          <label>Email:</label>
          <input
            name="email"
            placeholder={"bruna_o@gmail.com"}
            value={form.email}
            onChange={onChangeInput}
            required
          />
        </Reactangle>

        <Reactangle>
          <label>CPF:</label>
          <input
            name="cpf"
            placeholder={"333.333.333-33"}
            value={form.cpf}
            onChange={onChangeInput}
            required
          />
        </Reactangle>

        <Retangulo>
          <button>Salvar</button>
          <button>Voltar</button>
        </Retangulo>
      </form>
    </EditarCadastro>
  );
};

export default ToEdit;
