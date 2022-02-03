import axios from 'axios';

export function getCountries(){
    return async function(dispatch){ //conectamos back y front. la q hice para todos los paises
        const json = await axios.get('http://localhost:3001/country',{});
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: json.data
        })
    }
};

export function getSearch(name){
    return async function(dispatch){
        try{
            const json = await axios.get(`http://localhost:3001/country?name=${name}`)
            return dispatch({
                type: 'GET_SEARCH',
                payload: json.data
            })
        }catch(e){
            console.log(e)
        }
    }
};

export function getActivity(){
    return async function(dispatch){
        const json = await axios.get('http://localhost:3001/activity')
        return dispatch({
            type: 'GET_ACTIVITY',
            payload: json.data
        })
    }
};

export function getDetail(id){
    return async function(dispatch){
        try{
            const json = await axios.get(`http://localhost:3001/country/${id}`)
            return dispatch({
                type: 'GET_DETAIL',
                payload: json.data
            })
        }catch(e){
            console.log(e)
        }
    }
};

export function postActivity(payload){
    return async function(dispatch){
        const json = await axios.post('http://localhost:3001/activity', payload);
        return dispatch({
            type: 'POST_ACTIVITY',
            payload: json
        })
    }
};

export function sortCountries(payload){
    return{
        type: 'FILTER_BY_CONTINENT',
        payload
    }
};

export function sortPopulation(payload){
    return{
        type: 'FILTER_BY_POPULATION',
        payload
    }
};

export function sortAlfa(payload){
    return{
        type: 'FILTER_BY_ALFA',
        payload
    }
};

export function sortActivity(payload){
    return{
        type: 'FILTER_BY_ACTIVITY',
        payload
    }
};