import { toast } from "react-toastify";
import api from "../../Services/api";
import { Container, StyeleButton } from "./styles";

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

  const showMOdal = (event) => {
    setItemToChange(event.target.id);
    setModalPut(true);
  };

  return (
    <Container>
      <h3>{title}</h3>
      <p id={id} onClick={showMOdal}>
        {status}
      </p>
      <StyeleButton onClick={(event) => deleteItem(event.target.id)} id={id}>
        {" "}
        X{" "}
      </StyeleButton>
    </Container>
  );
};

export default Card;
