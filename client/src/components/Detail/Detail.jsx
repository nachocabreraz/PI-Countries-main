import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail } from "../../redux/actions";
import './Detail.css'

export default function Detail(props) {
    const dispatch =  useDispatch();

useEffect(()=>{
    dispatch(getDetail(props.match.params.id)); //AUMENTAR TITULOS DE PAISES CENTRAR PAGINA
}, [dispatch, props.match.params.id]); //,[dispatch, props.match.params.id]

const country = useSelector((state)=> state.detail);


return(
    <div className="detailContainer">

     <div>
        <Link to='/home'><button className="goback">Back to Home</button></Link>
    </div>


    <div className="specialdiv">
        {
            country?
            
            <div>

                <div>
             <div className="content">   
            <h1 className="countryname">{country.name}</h1>
            <img src = {country.flag} alt='Flag not found' width='250px' height='175px' margin='3px'/>
            <h2>ID: {country.id}</h2>
            <h2>Continent: {country.continent}</h2>
            <h3 alt='Capital not found'>Capital: {country.capital || 'Capital not found'}</h3>
            <h3 alt='Subregion not found'>Subregion: {country.subregion}</h3>
            <h3>Area: {country.area} Km2</h3>
            <h3>Population: {country.population}</h3>
            </div>
        {

        country?.activities?.length === 0 ? <div>
                <h1>There are no activities for this country </h1>
                <div>
                <Link to = '/create'>
                    <button className="goback">Create Activities</button>
                </Link>
                </div>
                </div> : 
                
                country?.activities?.map((activity) => (
                <div className="activities" key={activity.id}>
                        <h4>Activity: {activity.name} </h4>
                        <h4>Difficulty: {activity.difficulty} </h4>
                        <h4>Season: {activity.season} </h4>
                        <h4>Duration: {activity.duration} weeks</h4>
                </div>
                ))
                
                }

                </div>

        </div>: <p>No details were found</p>

        }

       

        </div>

        

    </div>
)


};