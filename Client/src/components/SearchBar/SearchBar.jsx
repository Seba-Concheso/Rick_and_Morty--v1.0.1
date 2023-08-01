import { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searching, setSearching] = useState(false); // Crea el estado "searching"

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async () => {
    setSearching(true); // Actualiza "searching" a true antes de comenzar la búsqueda
    await onSearch(searchQuery); // Realiza la búsqueda
    setSearching(false); // Actualiza "searching" a false cuando se completa la búsqueda
  };

  return (
    <div className="d-flex">
      <FormControl type="text" value={searchQuery} onChange={handleInputChange} />
      <Button variant="light" onClick={handleSearch} disabled={searching}>
        {searching ? "Searching..." : "Search"}
      </Button>
    </div>
  );
};

export default SearchBar;
