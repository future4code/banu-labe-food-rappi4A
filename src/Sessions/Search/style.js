import styled from "styled-components";
import { ThemeProvider } from "styled-components";

export const DivSearch = styled.div`
    border: 1px solid #b8b8b8;
    border-radius: 2px;
    height: 3.5rem;
    margin: 8px 1rem;
    padding: 0 0.503rem;
    
    display: flex;
    align-items: center;
    input {
        border: none;
        padding-left: 8px;
        font-size: 1rem;
        letter-spacing: -0.39px;
        color: #d0d0d0;
        height: 98%;
        width: 98%;
        box-shadow: none;
        color: black;
        outline: 0;

    }
    button {
        border: none;
        border-radius: 8px;
        color: #ffffff;
        background-color: #e86e5a;
        height: 60%;
        width: 20%;
        font-weight: bold;
    }
`