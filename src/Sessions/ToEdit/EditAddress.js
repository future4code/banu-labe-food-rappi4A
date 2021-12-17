import React, { useState, useEffect } from "react";
import useForm from "../../Hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../Constants/Url";
import styled from "styled-components";

const Reactangle = styled.div`
  width: 328px;
  height: 56px;
  margin: 8px 0 0;
  padding: 19px 48px 19px 16px;
  border-radius: 4px;
  border: solid 1px #b8b8b8;
`;

const EditarEndereço = styled.div`
  width: 360px;
  height: 640px;
  padding: 0 0 78px;
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
const Button = styled.div`
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
const EditAddress = () => {
  const { form, onChangeInput, clear } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const updateAddress = (event) => {
    event.preventDefault();

    const body = {
      street: form.street,
      number: Number(form.number),
      neighbourhood: form.neighbourhood,
      city: form.city,
      state: form.state,
      complement: form.complement,
    };

    axios
      .put(`${BASE_URL}/address`, body, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        alert("Endereço atualizado com sucesso!");
      })

      .catch((err) => {
        console.log(err);
        alert("Tente novamente!");
      });

    clear();
  };

  return (
    <EditarEndereço>
      <Bar>
        <h1>Editar Endereço</h1>
      </Bar>
      <form onSubmit={updateAddress}>
        <Reactangle>
          <input
            name="street"
            value={form.street}
            placeholder={"Rua"}
            onChange={onChangeInput}
            required
          />
        </Reactangle>

        <Reactangle>
          <input
            name="number"
            placeholder={"Numero"}
            value={form.number}
            onChange={onChangeInput}
            required
            type={"number"}
          />
        </Reactangle>

        <Reactangle>
          <input
            name="neighbourhood"
            placeholder={"Bairro"}
            value={form.neighbourhood}
            onChange={onChangeInput}
            required
          />
        </Reactangle>

        <Reactangle>
          <input
            name="city"
            placeholder={"Cidade"}
            value={form.city}
            onChange={onChangeInput}
            required
          />
        </Reactangle>
        <Reactangle>
          <input
            name="state"
            placeholder={"Estado"}
            value={form.state}
            onChange={onChangeInput}
            required
          />
        </Reactangle>

        <Reactangle>
          <input
            name="complement"
            placeholder={"complemento"}
            value={form.complement}
            onChange={onChangeInput}
            required
          />
        </Reactangle>

        <button>Enviar</button>
      </form>
    </EditarEndereço>
  );
};

export default EditAddress;
