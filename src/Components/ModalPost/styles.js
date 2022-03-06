import styled, { keyframes } from "styled-components";

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

export const ContainerAddTech = styled.div`
  width: 296px;
  border-radius: 6px;
  background-color: var(--grey3);
  box-shadow: inset 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${apperFromRight} 1s;

  .header-modal {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    background-color: var(--grey2);
    justify-content: space-between;
    border-radius: 6px 6px 0px 0px;

    @media (min-width: 400px) {
      height: 50px;
    }

    h4 {
      color: var(--grey0);
      font-size: 11.2px;
      margin-left: 16.04px;
      @media (min-width: 400px) {
        font-size: 14px;
      }
    }

    button {
      margin-right: 9.63px;
      width: 11px;
      border-color: var(--grey2);
      color: var(--grey1);
      background-color: var(--grey2);
    }
  }

  @media (min-width: 400px) {
    width: 369px;
  }

  form {
    height: 270px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0px 10px;

    .Container-select {
      color: var(--grey0);
      font-size: 9.772px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      @media (min-width: 400px) {
        font-size: 12.18px;
      }

      select {
        background-color: var(--grey2);
        margin-top: 22px;
        align-items: center;
        width: 264.66px;
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
      margin: 16.21px 0px 25.67 0px;
      background-color: var(--colorPrimary);
      font-size: 13px;
      font-weight: 500;
    }
  }
`;
