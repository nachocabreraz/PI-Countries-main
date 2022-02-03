import React from "react";

export default function Pagination({countriesPerPage, allCountries, paginado}){
    const pageNumber = [];

    for (let e=1; e<=Math.ceil(allCountries/countriesPerPage); e++){
        pageNumber.push(e);
    };
    return(
        <nav>
            <ul>
                {pageNumber && pageNumber.map(n=>(
                    <button key={n} onClick={()=>paginado(n)}>{n}</button>
                ))}
            </ul>
        </nav>
    )
};