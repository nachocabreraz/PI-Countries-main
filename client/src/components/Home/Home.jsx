import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivity, getCountries, sortActivity, sortAlfa, sortCountries, sortPopulation } from "../../redux/actions";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";

export default function Home() {
    const dispatch = useDispatch() //pa utilizar la const e ir despachando mis acciones
    const allCountries = useSelector(state => state.countries) //el useSel me trae en la const todo lo que esta en el estado de countries
    const [currentPage, setcurrentPage] = useState(1); //lo inicio en uno para q siempre se inicie en la primera page
    const[countriesPerPage] = useState(9); //cards que se van a mostrar
    const [, setOrder] = useState('');
    const [, setAZ] = useState('');
    const lastCountry = currentPage * countriesPerPage; //indice del ultimo pais = a la pag actual en la que me encuentro * la cantidad de paises por pag
    const firstCountry = lastCountry - countriesPerPage; // indice del 1 pais = al indice del ultim pais - los paises por pag
    const countriesActualPage = allCountries.slice(firstCountry, lastCountry);
    const paginado = (pageNumber)=>{setcurrentPage(pageNumber)};
    
    

    const activityName = useSelector(state=>state.activity);
    const prueba = activityName.map((e)=> e.name);
    const unicos = [...new Set(prueba)];



    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch]);

    useEffect(()=>{
        dispatch(getActivity());
    },[dispatch]);

    function handleClick(event){  //handler que me resetea los countries
        event.preventDefault();
        dispatch(getCountries());
    };

    function handleFilterState(ev){
        dispatch(sortCountries(ev.target.value))
    };

    function handleFilterPopulation(ev){
        ev.preventDefault();
        dispatch(sortPopulation(ev.target.value))
        setcurrentPage(1);
        setOrder(`Ordenado ${ev.target.value}`)
    };

    function handleAlfa(ev){
        ev.preventDefault();
        dispatch(sortAlfa(ev.target.value))
        setcurrentPage(1)
        setAZ(`Ordenado ${ev.target.value}`)
    };

    function handleActivities(ev){
        dispatch(sortActivity(ev.target.value))
    };
    
    return (
        <div>
            <Link to='/'><button>Go back to Landing Page</button></Link>
            <h1>The Countries Website</h1>
            <Link to='/create'><button>Create New Activity!</button></Link>
            <button onClick={e=>{handleClick(e)}}>Reload Countries</button>

            <div>
            <SearchBar />
            </div>


            <div>

                { unicos.length === 0?
                <p>Create activities to filter them</p>
            : <select onChange={ev=>handleActivities(ev)}>
                {unicos.map(ev=>(
                <option value={ev}>{ev}</option>
                ))}
                </select>}

                <select onChange={ev=>handleFilterState(ev)}>
                <option value='All'>All</option>
                    <option value='North America'>North America</option>
                    <option value='South America'>South America</option>
                    <option value='Asia'>Asia</option>
                    <option value='Africa'>Africa</option>
                    <option value='Europe'>Europe</option>
                    <option value='Oceania'>Oceania</option>
                    <option value='Antarctica'>Antarctica</option>
                </select>



                <select onChange={ev=>handleAlfa(ev)}>
                    <option>Sort countries alphabetically</option>
                    <option value='asc'>A-Z</option>
                    <option value='des'>Z-A</option>
                </select>

                <select onChange={ev=> handleFilterPopulation(ev)}>
                    <option>Sort by population</option>
                    <option vale='ascp'>Most Population</option>
                    <option value='desp'>Least Population</option>
                </select>

                <div>
                    <Pagination countriesPerPage={countriesPerPage} allCountries={allCountries.length} paginado={paginado}></Pagination>
                </div>

                {
                    countriesActualPage?.map(el=>{
                        return (
                            <div key={el.id}> 
                                <Cards flag={el.flag} name={el.name} id={el.id} capital={el.capital} continent={el.continent} subregion={el.subregion} area={el.area} population={el.population} />

                            </div>
                            )
                    })}

                    
            </div>
        </div>
    )
}
