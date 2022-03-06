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

  :hover {
    background-color: var(--grey2);
  }

  p {
    font-size: 12px;
    color: var(--grey1);
    font-weight: 400;

    :hover {
      cursor: pointer;
    }
  }
  @media (min-width: 1010px) {
    width: 850px;
  }

  @media (min-width: 1100px) {
    width: 950px;
  }
`;

export const StyeleButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  color: var(--grey0);
  border: 0;
  width: 20px;
  height: 20px;
  font-size: 10px;
`;
