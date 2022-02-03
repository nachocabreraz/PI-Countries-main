import React from "react";
import { Link } from 'react-router-dom';
import { postActivity, getActivity } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

function validate(input) {
    if(!input.name){ console.log(input.name)
        alert("Name is required");
    }else if(!input.difficulty){
        alert ("Difficulty is required");
    }else if(!input.duration){
       alert ("Duration is required");
    }else if(!input.season){
       alert ("Season is required");
    }else if(input.countryId < 1){
       alert ("Select at least one country");
    };
};

export default function ActivityCreation() {
    const dispatch = useDispatch();
    const selectedCountries = useSelector((state)=> state.allCountries); //chequear nombre allCountries, estaba como allPaises
    const [, setError] = useState({});
    const [input, setInput]=useState({
        name:"",
        difficulty:"",
        duracton:"",
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
    setInput({
        ...input,
        countryId: [...input.countryId, ev.target.value]
    });
};

function hadleSeason(ev) {
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
        duracton:"",
        season:"",
        countryId:[]
        
    });
};
    return(
        <div>
            <h1>Create Activity</h1>
            <div>
            <Link to = '/home'><button>Back to Home</button></Link> 
            </div>

            <div>
            <form>
                
                <div>
                    <label>Activity:</label>
                    <input type = 'text' value = {input.name} name ='name'
                    onChange={(ev) => hadleChange(ev)}></input>
                </div>

                <div>
                    <label>Difficulty:</label>
                    <input type='number' value={input.difficulty} name='difficulty' onChange = {(ev)=> hadleDifficulty(ev)} />
                    {/* <select onChange = {(ev)=> hadleDifficulty(ev)}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    </select> */}
                </div>

                <div>
                    <label>Duration: -from 1 to 12-</label>
                    <input type='number' value = {input.duration} name ='duration'
                    onChange={(ev) => hadleChange(ev)}></input>
                </div>

                <div>
                    <label >Season: </label>
                    <select onChange={(ev) => hadleSeason(ev)} >
                    <option value ='summer'>summer</option>
                    <option value ='winter'>winter</option>
                    <option value='autumn'>autumn</option>
                    <option value='spring'>spring</option>
                    </select>
                </div>

                <div>
                <label>Countries: <select  onChange = {(ev) => hadleSelect(ev)}>
                    {selectedCountries.map((ev)=>(
                        <option value ={ev.id} >{ev.name} </option>
                    ))}
                </select></label>
            <button type='submit' onClick={(ev) => hadleSubmit(ev)}>Add</button>
            </div>
            </form>

            <div>
            {input.countryId.map(el=> //para borrar paises despues de agregarlos
                <div key={el.name}> {/* declaro key para que no se rompa */}
                    <h6>{el}</h6>
                    <button onClick={()=> hadleDelete(el)}>x</button>
                </div>)}
            </div>
        </div>
    </div>
    );
};