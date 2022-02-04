import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearch } from "../../redux/actions";

export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState('')

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getSearch(name))
    }

    return(
        <div>
            <input type="text"
            placeholder="Search Country..."
            onChange={(e)=>handleInputChange(e)}
             />
             <button type="submit" onClick={(e)=>handleSubmit(e)}>Search!</button>
        </div>
    )
}