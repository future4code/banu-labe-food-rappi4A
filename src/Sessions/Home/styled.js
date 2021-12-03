import styled from "styled-components";

export const HomePageContainer = styled.div`
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LogoImg = styled.img`
  width: 7.875rem;
  height: 4.063rem;
  object-fit: contain;
    animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) infinite
    both;
  @keyframes scale-up-center {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }

`