import "./Paginado.css";
import React from "react";

export default function Paginado({ countriesPerPage, allCountries, paginado }) {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <div className="paginado">
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li className="number" key={number}>
              <button className="btnPag" onClick={() => paginado(number)}>
                {number}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
