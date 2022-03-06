import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../Services/api";
import Button from "../Button";
import Input from "../Input";
import { ContainerChangeTech } from "./styles";

const ModalPut = ({ setModalPut, itemToChange, title, status, id }) => {
  const close = () => {
    return setModalPut(false);
  };

  const [token] = useState(
    JSON.parse(localStorage.getItem("kenzieHub:token")) || ""
  );

  const { register, handleSubmit } = useForm();

  const changeTech = ({ status }) => {
    api
      .put(
        `/users/techs/${itemToChange.id}`,
        {
          status: status,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        toast.info("Tecnologia atualizada");
      })
      .catch((err) => {
        toast.error("Infelizmente essa função ainda esta indisponível");
      });
  };

  return (
    <>
      <ContainerChangeTech>
        <div className="header-modal">
          <h4>Tecnologia Detalhes</h4>
          <Button onClick={close}>x</Button>
        </div>
        <form onSubmit={handleSubmit(changeTech)}>
          <Input
            register={register}
            name="title"
            value={itemToChange.title}
            placeholder={title}
            label="Nome do Projeto"
            disabled
          />
          <div className="Container-select">
            <label>Status</label>
            <select type="text" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <div className="butons">
            <Button type="submit">Salvar alterações</Button>
          </div>
        </form>
      </ContainerChangeTech>
    </>
  );
};

export default ModalPut;
