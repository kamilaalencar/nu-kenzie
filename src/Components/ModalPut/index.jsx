import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../Services/api";
import Button from "../Button";
import Input from "../Input";
import { Container, ContainerChangeTech, StyleButton } from "./styles";

const ModalPut = ({ setModalPut, itemToChange }) => {
  const close = () => {
    return setModalPut(false);
  };

  const [token] = useState(
    JSON.parse(localStorage.getItem("kenzieHub:token")) || ""
  );

  const { register, handleSubmit } = useForm();

  const onSubmitFunction = (data) => {
    api
      .put(`/users/techs/${itemToChange}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Tecnologia atualizada");
      })
      .catch((err) => {
        toast.error("Ops!! Algo deu errado");
      });
  };
  return (
    <>
      <ContainerChangeTech>
        <div className="header-modal">
          <h4>Tecnologia Detalhes</h4>
          <Button onClick={close}>x</Button>
        </div>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <div className="Container-select">
            <label>Status</label>
            <select type="text" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <Button>Salvar Alterações</Button>
          <Button>Excluir</Button>
        </form>
      </ContainerChangeTech>
    </>
  );
};

export default ModalPut;
