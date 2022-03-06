import styled from "styled-components";

export const Container = styled.div`
  height: 45px;
  width: 270px;
  padding: 0px 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  background-color: var(--grey4);

  h3 {
    color: var(--grey0);
    :hover {
      cursor: pointer;
    }
  }
  p {
    font-size: 12px;
    color: var(--grey1);
    font-weight: 400;
  }
  button {
    width: 60px;
    height: 28px;
    border-color: transparent;
    color: var(--grey1);
    background-color: transparent;
    :hover {
      background-color: var(--grey3);
      border-color: var(--grey3);
    }
  }
  @media (min-width: 600px) {
    width: 440px;
  }
  @media (min-width: 1010px) {
    width: 850px;
  }

  @media (min-width: 1100px) {
    width: 950px;
  }
`;
