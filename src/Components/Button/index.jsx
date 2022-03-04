import { ContainerButton } from "./styles";

const Button = ({ children, register, ...rest }) => {
  return (
    <ContainerButton type="button" register={register} {...rest}>
      {children}
    </ContainerButton>
  );
};
export default Button;
