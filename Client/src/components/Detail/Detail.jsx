import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((Response) => Response.data)
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
    return setCharacter({});
  }, [id]);
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6} lg={6}>
          <Card className=" text-dark" style={{ fontSize: "24px", fontWeight: "bold" }}>
            <Card.Img src={character?.image} alt="Card image" />
            <Card.Body>
              <Card.Title style={{ fontSize: "28px", fontWeight: "bold" }}>{character?.name}</Card.Title>
              <Card.Text style={{ fontSize: "20px", fontWeight: "bold" }}>{character?.status}</Card.Text>
              <Card.Text style={{ fontSize: "20px", fontWeight: "bold" }}>{character?.species}</Card.Text>
              <Card.Text style={{ fontSize: "20px", fontWeight: "bold" }}>{character?.gender}</Card.Text>
              <Card.Text style={{ fontSize: "20px", fontWeight: "bold" }}>{character?.origin?.name}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    // <div>
    //     <h1>Detail</h1>
    //     <h2>{character?.name}</h2>
    //     <h2>{character?.species}</h2>
    //     <h2>{character?.status}</h2>
    //     <h2>{character?.gender}</h2>
    //     <h2>{character?.origin?.name}</h2>
    //     <img src={character?.image} alt={character?.name} />

    // </div>
  );
};

export default Detail;
