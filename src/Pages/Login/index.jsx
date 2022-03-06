import { Container, Content, AnimationContainer } from "./styles";
import logo from "../../assets/Logo.svg";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../Services/api";
import { toast } from "react-toastify";

const Login = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        toast.success("Login feito com sucesso!");
        localStorage.setItem(
          "@kenzieHub:token",
          JSON.stringify(response.data.token)
        );
        localStorage.setItem(
          "@kenzieHub:user",
          JSON.stringify(response.data.user)
        );
        setAuthenticated(true);
        return history.push("./dashboard");
      })
      .catch((err) => {
        toast.error("Email ou senha inválidos");
        console.log(err);
      });
  };

  return (
    <Container>
      <img src={logo} alt="Kenzie Hub" />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Login</h1>

            <Input
              register={register}
              name="email"
              error={errors.email?.message}
              label="Email "
              type="email"
              placeholder="Digite aqui seu email"
            />
            <Input
              register={register}
              name="password"
              error={errors.password?.message}
              label="Senha "
              type="password"
              placeholder="Digite aqui sua senha"
            />
            <Button type="submit">Entrar</Button>
            <span>Ainda não possui uma conta?</span>
            <Button register onClick={() => history.push("/register")}>
              Cadastre-se
            </Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Login;
