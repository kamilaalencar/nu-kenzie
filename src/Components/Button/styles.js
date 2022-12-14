import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 100%;
  height: 38.38px;
  color: var(--grey0);
  background-color: ${(props) => (props.register ? "#868E96" : "#FF577F")};
  margin: 0px 5px;
  border: 1.2px solid ${(props) => (props.register ? "#868E96" : "#FF577F")};
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 16px;

  :hover {
    transition: 0.4s;
    background-color: ${(props) => (props.register ? "#343B41" : "#FF427F")};
    border: 1.2px solid ${(props) => (props.register ? "#343B41" : "#FF427F")};
  }
  @media (min-width: 400px) {
    height: 48px;
  }
`;
