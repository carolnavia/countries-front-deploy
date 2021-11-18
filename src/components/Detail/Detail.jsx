import React, { useEffect, useState } from "react";
// import { getCountryDetail } from "../../redux/actions/indexActiones";

import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "./Detail.css";

export default function Detail() {
  const params = useParams();
  console.log(params);
  const { id } = params;

  const [country, setCountry] = useState(null);

  useEffect(() => {
    getCountryDetail(id);
  }, [id]);

  async function getCountryDetail(id) {
    try {
      const response = await axios.get(
        `https://backend-countries-carolnavia.herokuapp.com/countries/${id}`
      );
      setCountry(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // const country = useSelector((state) => state.countryDetail);

  return (
    <div className="main">
      <div className="fondo">
        {country ? (
          <div className="cardDetail">
            <h2> {country.name}</h2>
            <h3> Capital: {country.capital}</h3>
            <img
              src={country.flag}
              width="200"
              height="80"
              alt="img not found"
            />
            <h3>
              {" "}
              Area: {country.area / 1000000} Millones de km<sup>2</sup>
            </h3>
            <h3>
              {" "}
              Poblacion: {country.population / 100000} Millones de Personas
            </h3>
            <h3> Region: {country.continent}</h3>
            <h3> Subregion: {country.subregion}</h3>
            <h4> Actividad: </h4>
            {country?.activities?.length >= 1 ? (
              country.activities.map((e, index) => {
                return (
                  <>
                    <h5>
                      {" "}
                      <ul key={index}>
                        <li>{e.name} </li>
                        <li>Temporada: {e.season} </li>
                        <li>Duracion: {e.duration} Horas </li>
                        <li>Dificultadad: {e.difficulty} </li>
                      </ul>
                    </h5>
                  </>
                );
              })
            ) : (
              <Link to="/crear">
                <button className="btn">Crear</button>
              </Link>
            )}{" "}
          </div>
        ) : (
          <p>Loading...</p>
        )}

        <Link to="/home">
          <button className="btn">Volver</button>
        </Link>
      </div>
    </div>
  );
}
