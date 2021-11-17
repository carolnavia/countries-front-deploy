import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import "./ActivityCreated.css";

export default function ActivityCreated() {
  const countries = useSelector((state) => state.countries);
  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryArray: [],
  });

  const [setErrors] = useState("");

  const handlerChange = (e) => {
    let value = e.target.value;
    if (e.target.name === "difficulty") {
      ValidityState(value);
    }
    if (e.target.name === "country") {
      setActivity({
        ...activity,
        countryArray: [...activity.countryArray, value],
      });
    } else {
      setActivity({
        ...activity,
        [e.target.name]: value,
      });
    }
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();

    const msg = await sendActivity(activity);
    if (msg) alert(msg);
    setActivity({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countryArray: [],
      msg,
    });
  };

  const sendActivity = async (activity) => {
    const { name, difficulty, duration, season, countryArray } = activity;
    if (!name || !difficulty || !duration || !season || !countryArray)
      return alert("Todos los campos son obligatorios");
    else {
      const result = await axios.post("http://localhost:3001/activity", {
        name,
        difficulty,
        duration,
        season,
        country: countryArray,
      });
      alert("Actividad creada con exito");
      return result.data.msg;
    }
  };

  const ValidityState = (e) => {
    if (!/^[1-5]$/.test(e)) {
      setErrors("Debe ser un valor entre 1 y 5");
      alert("Debe ser un valor entre 1 y 5");
    } else {
      setErrors("");
    }
  };

  function changeCountry(e) {
    setActivity({
      ...activity,
      countryArray: e.target.value,
    });
  }

  return (
    <div className="actForm">
      <div className="back">
        <Link to="/home">
          <button className="btnBack">VOLVER</button>
        </Link>
      </div>

      <div className="form">
        <div className="titulo">
          <h2>CREA TU ACTIVIDAD TURISTICA</h2>
        </div>

        <form
          onChange={handlerChange}
          onSubmit={handlerSubmit}
          className="formHijo"
        >
          <div>
            <span className="ancho">NOMBRE</span>
            <br></br>
            <input
              placeholder="Nombre"
              type="text"
              name="name"
              className="title"
              // required
            />
          </div>
          <div>
            <span className="ancho">DIFICULTAD</span>
            <br></br>
            <input
              className="title"
              placeholder="1 a 5"
              type="number"
              id="dif"
              min="1"
              max="5"
              maxLength="1"
              name="difficulty"
              // required
            />
          </div>
          <div>
            <span className="ancho">DURACION</span>
            <br></br>
            <input
              className="title"
              type="number"
              name="duration"
              placeholder="1 a 24"
              id="dura"
              min="1"
              max="24"
              maxLength="2"
              // required
            />
          </div>
          <div className="temporada">
            <span className="ancho">TEMPORADA</span>
            <br></br>
            <select
              name="season"
              className="title"
              // required
            >
              <option value="">Temporada </option>
              <option value="Verano"> Verano</option>
              <option value="Invierno"> Invierno</option>
              <option value="Otoño"> Otoño</option>
              <option value="Primavera"> Primavera</option>
            </select>
          </div>
          <div className="pais">
            <span className="ancho">Pais</span>
            <br></br>
            <select
              name="country"
              onChange={changeCountry}
              className="title"
              // required
            >
              <option>Seleccionar paises</option>
              {countries.map((e) => {
                return (
                  <>
                    <option value={e.name}>{e.name}</option>
                  </>
                );
              })}
            </select>
            <ul>{<li>{activity.countryArray.map((el) => el + " ,")}</li>}</ul>

            <button className="crearAct" type="submit">
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
