import { ButtonBase } from "@material-ui/core";
import { KeyboardArrowLeft } from "@material-ui/icons";
import React from "react";

import styled from "styled-components";
import { goToBack, goToLogin } from "../Router/Coordinate";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px gray solid;
  /* padding: 6px; */
  width: 100vw;
  margin: 0px;
`;
const P = styled.p`
  margin: 0px 20px;
`;
const P2 = styled.p`
  margin: 0px 16px 0px 0px;
`;

const LogoutButton = styled.div`
  color: #e86e5a;
  margin: 0 4px;
  padding: 0 8px;
`;

const Header = (props) => {
    const goBack = (history) => {
        goToBack(history);
    };
    const actionLogout = (history) => {
        localStorage.removeItem("token");
        goToLogin(history);
    };

    return (
        <Container>
            {props.history ? (
                <ButtonBase onClick={() => goBack(props.history)}>
                    <P2>
                        {" "}
                        <KeyboardArrowLeft />{" "}
                    </P2>
                </ButtonBase>
            ) : (
                <P></P>
            )}
            <p>{props.title ? props.title : " "}</p>
            <LogoutButton>
                {props.logout ? (
                    <ButtonBase onClick={() => actionLogout(props.logout)}>
                        <p>Logout</p>
                    </ButtonBase>
                ) : (
                    <P> </P>
                )}
            </LogoutButton>
        </Container>
    );
};
export default Header;
