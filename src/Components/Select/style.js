import styled from "styled-components";

export const Container = styled.div`
  div {
    color: var(--grey0);
    font-size: 12.18px;
    margin-bottom: 22.33px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  select {
    background-color: var(--grey2);
    align-items: center;
    width: 328px;
    height: 48px;
    flex: 1;
    border: 0.97px solid var(--grey2);
    border-radius: 4px;
    color: var(--grey1);
    padding-left: 15px;
    font-size: 16.24px;

    option {
      color: var(--grey1);
      font-size: 16.24px;
    }
  }
`;
