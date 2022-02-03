import React from "react";

export default function Cards({ flag, name, id, capital, continent, subregion, area, population }) {
    return (
        <div>
            <img src={flag}/>
            {/* <h3>{flag}</h3> */}
            <h4>{name}</h4>
            <h4>{id}</h4>
            <h4>{capital}</h4>
            <h5>{continent}</h5>
            <h5>{subregion}</h5>
            <h5>{area}</h5>
            <h5>{population}</h5>
        </div>
    )
}