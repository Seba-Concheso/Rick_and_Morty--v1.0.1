import Character from "../Card/Character";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import "./Cards.css";

export default function Cards({ characters, onClose, searching }) {
  if (searching) return <Spinner animation="border" className="text-center" />;

  return (
    <Row xs={1} md={2} lg={4} className="g-4 p-4 pt-5">
      {searching ? (
        <Spinner animation="border" className="text-center" />
      ) : (
        characters.map(({ id, name, status, species, gender, origin, image }) => {
          return (
            <Col key={id} className="mb-4">
              <Character
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                origin={origin.name}
                image={image}
                onClose={onClose}
              />
            </Col>
          );
        })
      )}
    </Row>
  );
}
