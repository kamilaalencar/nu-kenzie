import { toast } from "react-toastify";
import api from "../../Services/api";
import Button from "../Button";
import { Container } from "./styles";

const Card = ({ status, title, id, setItemToChange, setModalPut }) => {
  const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));

  const deleteItem = (buttonId) => {
    api
      .delete(`/users/techs/${buttonId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Tecnologia Deletada").catch((err) => console.log(err));
      });
  };

  const ChangeTech = () => {
    setModalPut(true);
  };

  return (
    <Container>
      <h3 onClick={ChangeTech}>{title}</h3>
      <p id={id}>{status}</p>
      <Button onClick={(event) => deleteItem(event.target.id)} id={id}>
        Excluir
      </Button>
    </Container>
  );
};

export default Card;
