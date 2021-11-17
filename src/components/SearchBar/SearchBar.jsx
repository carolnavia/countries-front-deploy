import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/actions/indexActiones";
import "./SearchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    dispatch(searchByName(name));
  };

  return (
    <div clasName="searchBar">
      <input
        className="search"
        type="texto"
        placeholder="Buscar...."
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className="searchBtn"
        type="submit"
        onClick={(e) => handleSubmitSearch(e)}
      >
        Buscar
      </button>
    </div>
  );
}
