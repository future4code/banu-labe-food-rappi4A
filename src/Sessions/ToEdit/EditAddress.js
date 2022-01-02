import React, { useState, useEffect } from "react";
import useForm from "../../Hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../Constants/Url";
import styled from "styled-components";

const Barra = styled.div`
  width: 360px;
  height: 64px;
  margin: 0 0 16px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;
const H1 = styled.div`
  width: 175px;
  height: 44px;
  margin: 20px 92px 0 54px;
  padding: 13px 67.5px 12px;
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
const EditarEndereço = styled.div`
  width: 360px;
  height: 640px;
  padding: 0 0 294px;
`;

const Retangular = styled.div`
  width: 328px;
  height: 56px;
  margin: 8px 0 0;
  padding: 19px 48px 19px 16px;
  border-radius: 4px;
  border: solid 1px #b8b8b8;
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

const div = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: space-between;
`;

const Quadro = styled.div`
  width: 328px;
  height: 42px;
  padding: 12px 16px;
  border-radius: 2px;
  background-color: var(--dark-peach);
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
    <div>
      <Barra>
        <H1>Endereço</H1>
      </Barra>
      <EditarEndereço>
        <form onSubmit={updateAddress}>
          <Retangular>
            <label>Rua:</label> <br></br>
            <input
              name="street"
              value={form.street}
              placeholder={"Rua Alessandra Vieira"}
              onChange={onChangeInput}
              required
            />
          </Retangular>

          <Retangular>
            <label>Número:</label> <br></br>
            <input
              name="number"
              placeholder={"42"}
              value={form.number}
              onChange={onChangeInput}
              required
              type={"number"}
            />
          </Retangular>

          <Retangular>
            <label>Bairro:</label> <br></br>
            <input
              name="neighbourhood"
              placeholder={"Santana"}
              value={form.neighbourhood}
              onChange={onChangeInput}
              required
            />
          </Retangular>
          <Retangular>
            <label>Cidade:</label> <br></br>
            <input
              name="city"
              placeholder={"São Paulo"}
              value={form.city}
              onChange={onChangeInput}
              required
            />
          </Retangular>

          <Retangular>
            <label>Estado:</label> <br></br>
            <input
              name="state"
              placeholder={"Estado"}
              value={form.state}
              onChange={onChangeInput}
              required
            />
          </Retangular>

          <Retangular>
            <label>Complemento:</label> <br></br>
            <input
              name="complement"
              placeholder={"Apto./Bloco"}
              value={form.complement}
              onChange={onChangeInput}
              required
            />
          </Retangular>
          <Quadro>
            <button>Enviar</button>
          </Quadro>
        </form>
      </EditarEndereço>
    </div>
  );
};

export default EditAddress;
