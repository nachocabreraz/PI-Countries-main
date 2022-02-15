import React from "react";
import './Pagination.css'

export default function Pagination({countriesPerPage, allCountries, paginado, currentPage}){
    const pageNumber = [];

    for (let e=1; e<=Math.ceil(allCountries/10); e++){
        pageNumber.push(e);
    };
    return(
        <nav>
            <ul>
                {pageNumber && pageNumber.map(n=>(
                    <button className={n===currentPage? 'active':'pag'} key={n} onClick={()=>paginado(n)}>{n}</button>
                ))}
            </ul>
        </nav>
    )
};