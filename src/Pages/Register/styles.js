import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Header = styled.header`
  width: 295.83px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 55.86px;
  margin: 55.86px 0px 30.98px 0px;

  @media (min-width: 400px) {
    width: 370px;
  }
  img {
    width: 97.59px;
    height: 13.53px;

    @media (min-width: 400px) {
      width: 122.06px;
      height: 16.92px;
    }
  }
  button {
    width: 79.54px;
    height: 25.58px;
    background-color: var(--grey3);
    border-color: var(--grey3);
    font-weight: 600;
    font-size: 9.59px;

    @media (min-width: 400px) {
      width: 67.49px;
      height: 32px;
      font-size: 12px;
    }
    :hover {
      background-color: var(--grey2);
      border-color: var(--grey2);
    }
  }
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
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media (min-width: 400px) {
      width: 340px;
    }

    h1 {
      font-size: 14.44px;
      margin-bottom: 17.59px;
      color: var(--grey0);

      @media (min-width: 400px) {
        font-size: 18px;
      }
    }
    span {
      color: var(--grey1);
      font-size: 9.59px;

      @media (min-width: 400px) {
        font-size: 12px;
      }
    }

    .Container-select {
      color: var(--grey0);
      font-size: 9.772px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 22px;

      @media (min-width: 400px) {
        font-size: 12.18px;
      }

      select {
        background-color: var(--grey2);
        margin-top: 22px;
        align-items: center;
        width: 264.66px;
        height: 48px;
        flex: 1;
        border: 0.97px solid var(--grey2);
        border-radius: 4px;
        color: var(--grey1);
        padding-left: 15px;
        font-size: 16.24px;
        box-sizing: border-box;

        @media (min-width: 400px) {
          width: 329px;
        }

        option {
          color: var(--grey1);
          font-size: 16.24px;
        }
      }
    }
    button {
      width: 259.9px;
      margin-top: 22px;
      background-color: var(--colorPrimaryNegative);
      border-color: var(--colorPrimaryNegative);

      @media (min-width: 400px) {
        width: 324px;
      }
    }
  }
`;
