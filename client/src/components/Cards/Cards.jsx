import React from "react";
import './Cards.css'

export default function Cards({ flag, name, id, capital, continent, subregion, area, population }) {
    return (
        <div className="divCard">
            <img className="flag" src={flag} alt='No flag found'/>
            <h2>{name}</h2>
            {/* <h4>{id}</h4> */}
            <h4>Capital: {capital}</h4>
            <h4>Continent: {continent}</h4>
            {/* <h5>{subregion}</h5> */}
            {/* <h5>{area}</h5> */}
            <h4>Population: {population}</h4>
        </div>
    )
}