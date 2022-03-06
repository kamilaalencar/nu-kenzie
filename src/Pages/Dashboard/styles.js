import styled from "styled-components";

export const Navbar = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid var(--grey2);
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

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  height: 118px;
  align-items: flex-start;
  justify-content: center;
  border-bottom: 1px solid var(--grey2);

  @media (min-width: 400px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  h1 {
    font-size: 18px;
    color: var(--grey0);
    margin-left: 30px;
  }
  p {
    font-size: 12px;
    color: var(--grey1);
    margin: 10px 0px 0px 30px;
  }
`;
export const Container = styled.div`
  /* height: 100vh; */
  display: flex;
  width: 100%;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 29px;

  .header-tecnologias {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    h3 {
      font-size: 16px;
      color: var(--grey0);
      font-weight: 600;
    }
    button {
      width: 32.49px;
      height: 32px;
      background-color: var(--grey3);
      border-color: var(--grey3);
    }
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  hr {
    border: 1px solid var(--grey3);
  }
`;

export const DivTecnologies = styled.div`
  width: 285px;
  min-height: 400px;
  max-height: 700px;
  margin-top: 28px;
  padding: 10px;
  background-color: var(--grey3);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 600px) {
    width: 490px;
  }

  @media (min-width: 1010px) {
    width: 900px;
  }

  @media (min-width: 1100px) {
    width: 980px;
  }
`;
