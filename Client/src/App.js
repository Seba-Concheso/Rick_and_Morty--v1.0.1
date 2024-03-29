import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

// const URL_BASE="https://be-a-rym.up.railway.app/api/character";
// const API_KEY="6fcf90ad321a.85178fd9012a000d6570"
const URL = "http://localhost:3001/rickandmorty/login/";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);

  // const [access, setAccess] = useState(false);

  // const login = async (userData) => {
  //   console.log(userData);
  //   try {
  //     const { email, password } = userData;
  //     const { data } = await axios.get(URL + `${email} ${password}`);
  //     const { access } = data;
  //     console.log(access);
  //     setAccess(data);
  //     access && navigate("/home");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  useEffect(() => {
    navigate("/home");
  }, []); //Fijarse en el array de dependencias si va navigate.

  const onSearch = async (id) => {
    try {
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);

      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      window.alert("¡No hay personajes con este ID!");
    }
  };
  const onClose = (id) => {
    const charactersFiltered = characters.filter((character) => character.id !== id);
    setCharacters(charactersFiltered);
  };

  return (
    <div>
      {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : null}
      <Routes>
        {/* <Route path="/" element={<Form login={login} />} /> */}
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
