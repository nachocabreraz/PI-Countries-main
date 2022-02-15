import React from "react";
import './Cards.css'

export default function Cards({ flag, name, capital, continent, population }) {
    return (
        <div className="divCard">
            <img className="flag" src={flag} alt='No flag found'/>
            <h2>{name}</h2>
            <h4>Capital: {capital}</h4>
            <h4>Continent: {continent}</h4>
            <h4>Population: {population}</h4>
        </div>
    )
}