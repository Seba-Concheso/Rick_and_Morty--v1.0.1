import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NavBarr = ({ onSearch }) => {
  return (
    <Navbar expand="lg" bg="secondary" sticky="top">
      <Container>
        <Navbar.Brand className="text-light">R&M</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/home" className="nav-link text-light">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" className="nav-link text-light">
                About
              </Link>
            </Nav.Link>
            {/* <Nav.Link>
              <Link to="/Favorites" className="nav-link">
                Favorites
              </Link>
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
        <Nav.Link>
          <SearchBar onSearch={onSearch} />
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default NavBarr;
