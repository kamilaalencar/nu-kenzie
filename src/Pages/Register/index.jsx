import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Input from "../../Components/Input";
import Navbar from "../../Components/Navbar";
import { AnimationContainer, Container, Content } from "./styles";
import Select from "../../Components/Select";
import Button from "../../Components/Button";
import api from "../../Services/api";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

const Register = ({ authenticated }) => {
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup.string().required("Campo Obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas diferentes")
      .required("Campo Obrigatório"),
    course_module: yup.string().required("Campo Obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    // delete data.passwordConfirm;
    api
      .post("/users", data)
      .then((response) => {
        console.log(response);
        toast.success("Conta criada com sucesso!");
        history.push("/login");
      })
      .catch((err) => {
        toast.error("Ops! Algo deu errado");
        console.log(err);
      });
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Navbar />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Crie sua conta</h1>
            <span>Rápido e grátis, vamos nessa</span>
            <Input
              register={register}
              name="name"
              error={errors.name?.message}
              label="Nome "
              type="text"
              placeholder="Digite aqui seu nome"
            />
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
            <Input
              register={register}
              name="passwordConfirm"
              error={errors.passwordConfirm?.message}
              label="Confirmar Senha "
              type="password"
              placeholder="Digite novamente sua senha"
            />
            <Select
              label="Selecionar o módulo"
              register={register}
              name="course_module"
              error={errors.course_module?.message}
            />
            <Button type="submit">Cadastrar</Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Register;
