import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  img {
    width: 144.06px;
    height: 19.97px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

const apperFromRight = keyframes`
from{
    opacity:0;
    transform:translateX(50px)
}
to{
    opacity:1;
    transform:translateX(0px)
}
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 296px;
  border-radius: 4px;
  justify-content: center;
  background-color: var(--grey3);
  animation: ${apperFromRight} 1s;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  @media (min-width: 400px) {
    width: 370px;
  }

  form {
    margin: 42px 22px;
    width: 272px;
    text-align: center;

    @media (min-width: 400px) {
      width: 340px;
    }

    h1 {
      font-size: 14.44px;
      margin: 22px 0px;
      color: var(--grey0);

      @media (min-width: 400px) {
        font-size: 18px;
      }
    }
  }

  span {
    color: var(--grey1);
    font-size: 12px;
    height: 22px;
    line-height: 18px;
  }
  button {
    width: 259.9px;
    margin: 22px 0px;
    @media (min-width: 400px) {
      width: 324px;
    }
  }
`;
