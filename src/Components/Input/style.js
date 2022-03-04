import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  div {
    color: var(--grey0);
    font-size: 12.18px;
    margin-bottom: 22.33px;
  }
`;

export const InputContainer = styled.div`
  input {
    background-color: var(--grey2);
    align-items: center;
    width: 329px;
    height: 48px;
    flex: 1;
    border: 0.97px solid var(--grey2);
    border-radius: 4px;
    color: var(--grey1);
    padding-left: 15px;
    &::placeholder {
      font-size: 16.24px;
      color: var(--grey1);
    }
  }
`;
