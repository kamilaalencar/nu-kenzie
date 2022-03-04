import Logo from "../../assets/Logo.svg";
import { Container } from "./styles";

const Navbar = () => {
  return (
    <Container>
      <img src={Logo} alt="logo" />
    </Container>
  );
};
export default Navbar;
