import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  div {
    color: var(--grey0);
    font-size: 9.772px;
    margin-top: 15px;

    @media (min-width: 400px) {
      font-size: 12.18px;
    }
  }
`;

export const InputContainer = styled.div`
  input {
    background-color: var(--grey2);
    align-items: center;
    width: 264.66px;
    height: 38.5px;
    flex: 1;
    border: 0.97px solid var(--grey2);
    border-radius: 4px;
    color: var(--grey1);
    padding-left: 15px;
    &::placeholder {
      font-size: 16.24px;
      color: var(--grey1);
    }

    @media (min-width: 400px) {
      width: 329px;
      height: 48px;
    }
  }
`;
