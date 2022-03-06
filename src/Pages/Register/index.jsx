import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Input from "../../Components/Input";
import { AnimationContainer, Container, Header } from "./styles";
import Button from "../../Components/Button";
import api from "../../Services/api";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import logo from "../../assets/Logo.svg";

const Register = ({ authenticated }) => {
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    bio: yup.string().required("Campo Obrigatório"),
    contact: yup.string().required("Campo Obrigatório"),
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
    delete data.passwordConfirm;
    console.log(data);
    api
      .post("/users", data)
      .then((response) => {
        console.log(response);
        toast.success("Conta criada com sucesso!");
        return history.push("/");
      })
      .catch((err) => {
        toast.error("Ops! Algo deu errado");
        console.log(err);
      });
  };

  // if (authenticated) {
  //   return <Redirect to="/dashboard" />;
  // }

  return (
    <Container>
      <Header>
        <img src={logo} alt="Kenzie Hub" />
        <Button onClick={() => history.push("/")}>Voltar</Button>
      </Header>

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
          {/* <Input
              register={register}
              name="bio"
              error={errors.bio?.message}
              label="Uma frase que te define"
              type="text"
              placeholder="Uma frase"
            />
            <Input
              register={register}
              name="contact"
              error={errors.contact?.message}
              label="Contato"
              type="text"
              placeholder="Seu contato principal"
            /> */}

          <Input
            register={register}
            name="email"
            error={errors.email?.message}
            label="Email "
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
          <div className="Container-select">
            <label>Selecionar o módulo {errors.course_module?.message} </label>
            <select {...register("course_module")}>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro Módulo
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo Módulo
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro Módulo
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto Módulo
              </option>
            </select>
          </div>

          <Button type="submit">Cadastrar</Button>
        </form>
      </AnimationContainer>
    </Container>
  );
};

export default Register;
