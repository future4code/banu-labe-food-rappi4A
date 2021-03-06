import useForm from "../../Hooks/useForm";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../Constants/Url";
import { ContainerForm } from "./styled";
import CircularProgress from "@material-ui/core/CircularProgress";


const LoginForm = () => {
    const history = useHistory();

    const { form, onChangeInput, clear } = useForm({ email: "", password: "" });
    const [isLoading, setIsloading] = useState(false);
    

    const onSubmitForm = (e) => {
        e.preventDefault();
        login(setIsloading);
    };
    const token = localStorage.getItem("token")
    const login = () => {
        setIsloading(true);
        axios
            .post(`${BASE_URL}/login`, form)
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                clear();
                setIsloading(false);
                if (token) {
                    history.push("/restaurant")
                } else {
                    history.push("/login")
                }
                alert("Login Efetuado!");
            })
            .catch((err) => {
                alert("Erro no login!");
            });
    };

    return (
        <div>
            <ContainerForm onSubmit={onSubmitForm}>
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChangeInput}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"email"}
                />
                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChangeInput}
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"password"}
                    id={"password"}
                />
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                >
                    {isLoading ? (
                        <CircularProgress color={"inherit"} size={24} />
                    ) : (
                        <>Entrar</>
                    )}
                </Button>
            </ContainerForm>
        </div>
    );
};

export default LoginForm;