import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
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
  width: 370px;
  border-radius: 4px;
  justify-content: center;
  background-color: var(--grey3);
  animation: ${apperFromRight} 1s;

  form {
    /* margin: 80px 0; */
    width: 340px;
    text-align: center;
  }

  h1 {
    font-size: 18px;
    margin: 22px 0px;
    color: var(--grey0);
  }
  span {
    color: var(--grey1);
    font-size: 12px;
    height: 22px;
  }

  button {
    background-color: var(--colorPrimaryNegative);
    border-color: var(--colorPrimaryNegative);
  }
`;
