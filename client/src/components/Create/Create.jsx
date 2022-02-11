import React from "react";
import { Link, useHistory } from 'react-router-dom';
import { postActivity, getActivity } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import './Create.css'

function validate(input) {
    if(!input.name){ console.log(input.name)
        alert("Name is required");
    }else if(!input.difficulty || input.difficulty > 5 || input.difficulty < 1){
        alert ("Difficulty is required, and it has to be from 1 to 5");
    }else if(!input.duration || input.duration >12 || input.duration < 1){
       alert ("Duration is required, and it has to be from 1 to 12");
    }else if(!input.season){
       alert ("Season is required");
    }else if(input.countryId < 1){
       alert ("Select at least one country");
    };
};

export default function ActivityCreation() {
    const history = useHistory();
    const dispatch = useDispatch();
    const selectedCountries = useSelector((state)=> state.allCountries);
    const [, setError] = useState({});
    const [input, setInput]=useState({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        countryId:[]
    });

useEffect(()=>{
    dispatch(getActivity());
},[dispatch]);

function hadleDelete(ev) {
    setInput({
        ...input,
        countryId: input.countryId.filter(el => el !== ev)
    });
};

function hadleChange(ev){
    setInput    ({
        ...input,
        [ev.target.name] : ev.target.value
    });
};

function hadleSelect(ev) {
    if(!ev.target.value){
        return
    }
    setInput({
        ...input,
        countryId: [...input.countryId, ev.target.value]
    });
};

function hadleSeason(ev) {
    if(!ev.target.value){
        return
    }
    setInput({
        ...input,
        season: ev.target.value
    });
};

function hadleDifficulty(ev) {
    setInput({
        ...input,
        difficulty: ev.target.value
    });
};

function hadleSubmit(ev) {
    ev.preventDefault()
    setError (validate({
        ...input,
        [ev.target.value]: ev.target.value
    }));
    
    dispatch(postActivity(input))
    setInput({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        countryId:[]
        
    });
    history.push("/home");
};
    return(
        <div className="createContainer">

            <div className="create1">
            
            <div>
            <Link to = '/home'><button className="goback">Back to Home</button></Link> 
            </div>

            <div>
            <h1 className="titleact">Create Activity</h1>
            </div>

            <div className="things">
            <form>
                
                <div>
                    <label>Activity:</label>
                    <input autoComplete="off" className="blank" type = 'text' value = {input.name} name ='name'
                    onChange={(ev) => hadleChange(ev)}></input>
                </div>

                <div>
                    <label>Difficulty:</label>
                    <input className="blank" type='number' value={input.difficulty} name='difficulty' onChange = {(ev)=> hadleDifficulty(ev)} />
                    {/* <select onChange = {(ev)=> hadleDifficulty(ev)}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    </select> */}
                </div>

                <div>
                    <label>Duration: </label>
                    <input className="blank" type='number' value = {input.duration} name ='duration'
                    onChange={(ev) => hadleChange(ev)}></input>
                </div>

                <div>
                    <label >Season: </label>
                    <select className="blank" onChange={(ev) => hadleSeason(ev)} >
                    <option value="" disabled="">-Select Season-</option>
                    <option value ='summer'>summer</option>
                    <option value ='winter'>winter</option>
                    <option value='autumn'>autumn</option>
                    <option value='spring'>spring</option>
                    </select>
                </div>

                <div>
                <label>Countries: <select className="blank" onChange = {(ev) => hadleSelect(ev)}>
                <option value="" disabled="">-Select Country-</option>
                    {selectedCountries.map((ev, index)=>(
                        <option key={index} value ={ev.id} >{ev.name} </option>
                    ))}
                </select></label>
            <button className="add" type='submit' onClick={(ev) => hadleSubmit(ev)}>Add Activity</button>
            </div>
            </form>

            <div className="activity4">
            {input.countryId.map(el=> //para borrar paises despues de agregarlos
                <div className="activity5-grid" key={el.name}> {/* declaro key para que no se rompa */}
                    <h6 className="activity6">{el}</h6>
                    <button className="activity-button" onClick={()=> hadleDelete(el)}>x</button>
                </div>)}
            </div>
        </div>

        </div>
    
    </div>
    );
};