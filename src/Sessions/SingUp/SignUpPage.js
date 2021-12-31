import { Button, TextField } from "@material-ui/core";
import React from "react";
import useForm from "../../Hooks/useForm";
import logoFutureEatsInvert from "../../assets/logoFutureEatsInvert.png";
import { ScreenContainer, InputsContainer, TextSignUp } from "./styled";
import axios from "axios";
import { goToAddress } from "../../Router/Coordinate";
import { useHistory } from "react-router-dom";
import useUnprotectedPage from "../../Hooks/useUnprotectedPage";
import { BASE_URL } from '../../Constants/Url'
import Header from "../../Header/Header";

const SignUp = () => {
  useUnprotectedPage();
  const { form, onChangeInput, clear } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const history = useHistory();

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (form.password !== form.confirm) {
      alert("As senhas não estão iguais")
    } else {
      signUp(form, history, clear);
    }
  };

  const signUp = (form, history, clear) => {
    axios
      .post(`${BASE_URL}/signup`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        clear();
        goToAddress(history);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log('singUp')
  return (
    <div>
      <Header history={history} />
      <ScreenContainer>
        <img src={logoFutureEatsInvert} alt="logo Rappi4" />
        <InputsContainer>
          <TextSignUp>Cadastrar</TextSignUp>
          <form onSubmit={onSubmitForm}>
            <TextField
              type={"text"}
              name={"name"}
              value={form.name}
              onChange={onChangeInput}
              label={"Nome:"}
              variant={"outlined"}
              margin={"normal"}
              fullWidth
              required
            />

            <TextField
              type={"email"}
              name={"email"}
              value={form.email}
              onChange={onChangeInput}
              label={"E-mail:"}
              variant={"outlined"}
              margin={"normal"}
              fullWidth
              required
            />

            <TextField
              type={"text"}
              name={"cpf"}
              value={form.cpf}
              onChange={onChangeInput}
              label={"CPF:"}
              variant={"outlined"}
              margin={"normal"}
              fullWidth
              required
            />

            <TextField
              type={"password"}
              name={"password"}
              value={form.password}
              onChange={onChangeInput}
              label={"Senha:"}
              variant={"outlined"}
              margin={"normal"}
              fullWidth
              required
            />
            <TextField
              type={"password"}
              name={"confirm"}
              value={form.confirm}
              onChange={onChangeInput}
              label={"Confirmar:"}
              variant={"outlined"}
              margin={"normal"}
              fullWidth
              required
            />
            <Button
              type={"submit"}
              fullWidth
              variant={"contained"}
              color={"primary"}
              margin={"normal"}
            >
              Fazer Cadastro!
            </Button>
          </form>
        </InputsContainer>
      </ScreenContainer>
    </div>
  );
};

export default SignUp;