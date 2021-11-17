import React from "react";

import { useDispatch } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import {
  filterAbc,
  filterPopulation,
  filterRegion,
  filterActivities,
} from "../../redux/actions/indexActiones";
import "./Filtros.css";

export default function Filtros({ onChangeOrder, activityList }) {
  const dispatch = useDispatch();

  const handleAlphabet = (e) => {
    e.preventDefault();
    dispatch(filterAbc(e.target.value));
    onChangeOrder();
  };

  const handlePopulation = (e) => {
    e.preventDefault();
    dispatch(filterPopulation(e.target.value));
    onChangeOrder();
  };

  const handleRegion = (e) => {
    e.preventDefault();
    dispatch(filterRegion(e.target.value));
  };
  const handleActivity = (e) => {
    e.preventDefault();
    dispatch(filterActivities(e.target.value));
  };

  return (
    <div>
      <SearchBar />
      <div className="contenedor-filtros">
        <label htmlFor="order" className="az">
          <span className="titSel">Alfabeto</span>

          <select className="selec" id="order" onChange={handleAlphabet}>
            <option value="All">Selecione Orden Alfabetico</option>
            <option value="A to Z">A to Z</option>
            <option value="Z to A">Z to A </option>
          </select>
        </label>
        <label htmlFor="order">
          <div>
            <span className="titSel">Poblacion</span>
          </div>

          <select className="seleccion" id="order" onChange={handlePopulation}>
            <option value="All">Selecione Orden Poblacion</option>
            <option value="high">Desc Poblacion</option>
            <option value="less">Asc Poblacion </option>
          </select>
        </label>
        <label htmlFor="order">
          <div>
            <span className="titSel">Continente</span>
          </div>
          <select
            className="seleccion"
            id="order"
            onChange={(e) => handleRegion(e)}
          >
            <option value="All">Selecione un continente</option>
            <option value="Americas">Americas</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europa</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            <option value="Polar">Polar</option>
            <option value="no encontrada">No Enontrada</option>
          </select>
        </label>

        <label htmlFor="order">
          <div>
            <span className="titSel">Actividad</span>
          </div>
          <select className="seleccion" onChange={(e) => handleActivity(e)}>
            <option value="All">Selecione actividad</option>
            {activityList.map((e) => {
              return (
                <>
                  <option value={e.name}>{e.name}</option>
                </>
              );
            })}
          </select>
        </label>
      </div>
    </div>
  );
}
