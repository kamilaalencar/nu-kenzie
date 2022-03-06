import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../Services/api";
import Button from "../Button";
import Input from "../Input";
import { ContainerAddTech } from "./styles";

const ModalPost = ({ setModalPost }) => {
  const close = () => {
    return setModalPost(false);
  };

  const [token] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:token")) || ""
  );

  const { register, handleSubmit } = useForm();

  const onSubmitFunction = (data) => {
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success("Tecnologia cadastrada");
      })
      .catch((err) => {
        toast.error("Ops!! Algo deu errado");
      });
  };

  return (
    <>
      <ContainerAddTech>
        <div className="header-modal">
          <h4>Cadastrar tecnologia</h4>
          <Button onClick={close}>x</Button>
        </div>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            register={register}
            name="title"
            placeholder="Digite aqui sua tecnologia"
            label="Nome"
          />
          <div className="Container-select">
            <label>Status</label>
            <select type="text" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <Button type="submit">Cadastrar Tecnologia</Button>
        </form>
      </ContainerAddTech>
    </>
  );
};

export default ModalPost;
