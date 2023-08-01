import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Character.css";

function Character({ id, name, species, gender, image, onClose, addFav, removeFav, myFavorites }) {
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, species, gender, image, onClose });
    }
  };
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <Card bg="secondary" border="success" style={{ width: "15rem" }}>
      <div className="d-flex justify-content-between">
        <Button variant="outline-light" size="md" onClick={handleFavorite}>
          {isFav ? "❤️" : "🤍"}
        </Button>
        <Button variant="outline-danger" size="lg" onClick={() => onClose(id)}>
          X
        </Button>
      </div>
      <div className="overflow">
        <Link to={`/detail/${id}`}>
          <Card.Img variant="top" src={image} alt="" className="card-img-top" />
        </Link>
      </div>
      <Card.Body className=" text-light">
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Title className="text-center">Specie: {species}</Card.Title>
        <Card.Title className="text-center">Gender: {gender}</Card.Title>
      </Card.Body>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
