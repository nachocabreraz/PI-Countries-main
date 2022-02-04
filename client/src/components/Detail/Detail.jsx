import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail } from "../../redux/actions";

export default function Detail(props) {
    const dispatch =  useDispatch();

useEffect(()=>{
    dispatch(getDetail(props.match.params.id)); //AUMENTAR TITULOS DE PAISES CENTRAR PAGINA
}, [dispatch, props.match.params.id]); //,[dispatch, props.match.params.id]

const country = useSelector((state)=> state.detail);
console.log('pais ', country);
console.log('country con act: ', country.activities);

return(
    <div>

     <div>
        <Link to='/home'><button>Back to Home</button></Link>
    </div>
    <div>
        {
            country?
            
            <div>
            <h1>{country.name}</h1>
            <img src = {country.flag} alt='Flag not found' width='250px' height='175px' margin='3px'/>
            <h2>ID: {country.id}</h2>
            <h2>Continent: {country.continent}</h2>
            <h3 alt='Capital not found'>Capital: {country.capital || 'Capital not found'}</h3>
            <h4 alt='Subregion not found'>Subregion: {country.subregion}</h4>
            <h5>Area: {country.area} Km2</h5>
            <h5>Population: {country.population}</h5>

        {

        country?.activities?.length === 0 ? <div>
                <h1>There are no activities for this country </h1>
                <div>
                <Link to = '/create'>
                    <button>Create Activities</button>
                </Link>
                </div>
                </div> : 
                
                country?.activities?.map((activity) => (
                <div key={activity.id}>
                        <h6>Activity: {console.log(country, 'puta madre')}{activity.name} </h6>
                        <h6>Difficulty: {activity.difficulty} </h6>
                        <h6>Season: {activity.season} </h6>
                        <h6>Duration: {activity.duration}</h6>
                </div>
                ))
                
                }

        </div>: <p>No details were found</p>

        }

       

        </div> 
    </div>
)


};