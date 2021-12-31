import { useHistory } from "react-router-dom";
import React from "react";
import logo from "../../assets/logo.png";
import LoginForm from "./LoginForm";
import Button from "@material-ui/core/Button";
import { goToSignUp } from "../../Router/Coordinate";
import { LoginContainer, TextSignUp } from "./styled";
import useUnprotectedPage from "../../Hooks/useUnprotectedPage";


const LoginPage = () => {
    useUnprotectedPage();
    const history = useHistory();

    return (
        <LoginContainer>
            <img src={logo} alt="logo Rappi4" />
            <TextSignUp>Entrar</TextSignUp>
            <LoginForm />
            <Button
                onClick={() => goToSignUp(history)}
                type={"submit"}
                margin={"normal"}
                fullWidth
                variant={"text"}
                color={"primary"}
            >
                Não possui cadastro? Clique aqui.
            </Button>
        </LoginContainer>
    );
};

export default LoginPage;