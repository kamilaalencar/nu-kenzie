import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Card from "../../Components/Card";
import ModalPost from "../../Components/ModalPost";
import ModalPut from "../../Components/ModalPut";
import logo from "../../assets/Logo.svg";
import api from "../../Services/api";
import { Container, DivTecnologies, Header, Navbar } from "./styles";
import Button from "../../Components/Button";

const Dashboard = ({ authenticated, setAuthenticated }) => {
  const [modalPost, setModalPost] = useState(false);

  const [modalPut, setModalPut] = useState(false);

  const [itemTochange, setItemToChange] = useState("");

  const [user] = useState(JSON.parse(localStorage.getItem("@kenzieHub:user")));

  const [techList, setTechList] = useState([]);

  const history = useHistory();

  useEffect(() => {
    if (authenticated) {
      api
        .get(`https://kenziehub.herokuapp.com/users/${user.id}`)
        .then((response) => setTechList(response.data.techs))
        .catch((err) => console.log(err));
    }
  }, [techList]);

  const createTech = () => {
    setModalPost(true);
  };

  // if (!authenticated) {
  //   return <Redirect to="/" />;
  // }

  return (
    <>
      <Navbar>
        <img src={logo} alt="Kenzie Hub" />
        <Button onClick={() => history.push("/")}>Sair</Button>
      </Navbar>
      <Header>
        <h1>Olá, {user.name}</h1>
        <p> {user.course_module} </p>
      </Header>
      <Container>
        <div className="header-tecnologias">
          <h3>Tecnologias</h3>
          <Button onClick={createTech}>+</Button>
        </div>
        <nav>
          {modalPost && <ModalPost user={user} setModalPost={setModalPost} />}
          {modalPut && (
            <ModalPut
              use={user}
              setModalPut={setModalPut}
              itemToChange={itemTochange}
            />
          )}
        </nav>
        <DivTecnologies>
          {techList.map(({ title, status, id }) => (
            <Card
              setModalPut={setModalPut}
              setItemToChange={setItemToChange}
              title={title}
              status={status}
              id={id}
            />
          ))}
        </DivTecnologies>
      </Container>
    </>
  );
};
export default Dashboard;
