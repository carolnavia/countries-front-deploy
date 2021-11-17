import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getActivities } from "../../redux/actions/indexActiones";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Paginado from "../PAginado/Paginado";
import Filtros from "../Filtros/Filtros";

export default function Home() {
  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.countries);

  const activityList = useSelector((state) => state.allActivities);

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(9);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries());
  }

  return (
    <div className="home">
      <div className="header">
        <Link to="/home">
          <button
            className="btnheader"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            HOME
          </button>
        </Link>
        <h1 className="paises">Paises del Mundo</h1>

        <Link to="/crear">
          {" "}
          <button className="btnheader">CREAR ACTIVIDAD </button>
        </Link>
      </div>
      <Filtros onChangeOrder={() => paginado(1)} activityList={activityList} />
      <Paginado
        countriesPerPage={countriesPerPage}
        allCountries={allCountries.length}
        paginado={paginado}
      />

      <div className="allCards">
        {currentCountries?.map((c) => {
          return (
            <fragment>
              <Link to={"/home"} />
              <Card
                id={c.id}
                name={c.name}
                flag={c.flag}
                continent={c.continent}
                key={c.id}
              />
            </fragment>
          );
        })}
      </div>
    </div>
  );
}
