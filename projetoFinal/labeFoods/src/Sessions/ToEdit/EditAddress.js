import React, { useState, useEffect } from "react";
import useForm from "../../Hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../Constants/Url";

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
      <form onSubmit={updateAddress}>
        <input
          name="street"
          value={form.street}
          placeholder={"Rua"}
          onChange={onChangeInput}
          required
        />

        <input
          name="number"
          placeholder={"Numero"}
          value={form.number}
          onChange={onChangeInput}
          required
          type={"number"}
        />

        <input
          name="neighbourhood"
          placeholder={"Bairro"}
          value={form.neighbourhood}
          onChange={onChangeInput}
          required
        />
        <input
          name="city"
          placeholder={"Cidade"}
          value={form.city}
          onChange={onChangeInput}
          required
        />
        <input
          name="state"
          placeholder={"Estado"}
          value={form.state}
          onChange={onChangeInput}
          required
        />
        <input
          name="complement"
          placeholder={"complemento"}
          value={form.complement}
          onChange={onChangeInput}
          required
        />

        <button>Enviar</button>
      </form>
    </div>
  );
};

export default EditAddress;
