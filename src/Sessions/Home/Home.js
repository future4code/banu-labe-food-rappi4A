import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";
import { HomePageContainer, LogoImg } from './styled';



export default function HomePage() {

    const token = localStorage.getItem("token")
    const history = useHistory()
    setTimeout(() => {
        if (token) {
            history.push("/login")
        }
    }, 1000);
    return (
        <HomePageContainer>
            <LogoImg src={logo} alt="logo" />
        </HomePageContainer>
    )
};


























