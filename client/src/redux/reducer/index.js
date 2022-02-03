
const initialState = {
    countries : [],
    allCountries: [],
    activity: [],
    detail: []
};

function rootReducer(state = initialState, action){ 
    switch(action.type){
        case 'GET_COUNTRIES':
            return{
                ...state,
                countries: action.payload,   //le dice que llene el state con todos los paises
                allCountries: action.payload
            };
        case 'GET_SEARCH':
            return{
                ...state,
                countries: action.payload
            };
        case 'GET_ACTIVITY':
            return{
                ...state,
                activity: action.payload
            };
        case 'FILTER_BY_CONTINENT':
            const allCoun = state.allCountries
            const filteredState = action.payload === 'All' ? allCoun : allCoun.filter(el => el.continent === action.payload)
            return{
                ...state,
                countries: filteredState
            };
        case 'POST_ACTIVITY':
            return{
                ...state
            };
        case 'FILTER_BY_POPULATION':
            const population = action.payload === 'desp' ? state.countries.sort((a,b)=> a.population - b.population) : state.countries.sort((a,b)=> b.population - a.population)
            return{
                ...state,
                countries: population
            };
        case 'FILTER_BY_ACTIVITY':
            const array= []
            state.allCountries.map(el=>el.activities.forEach(element=>{ //puede ser activity
                if(element.name === action.payload){
                    array.push(el)
                }
            }))
            return{
                ...state,
                countries: array
            };
        case 'FILTER_BY_ALFA':
            const alfaNombre = action.payload === 'asc' ? state.countries.sort(function(a,b){
                if(a.name > b.name){
                    return 1
                }
                if(b.name > a.name){
                    return -1
                }
                return 0
            }) : state.countries.sort(function(a,b){
               if(a.name > b.name){
                   return -1
               }
               if(b.name > a.name){
                   return 1
               }
               return 0 
            })
            return {
                ...state,
                countries: alfaNombre
            };
            case 'GET_DETAIL':
                return{
                    ...state,
                    detail: action.payload
                }
            default:
                return state;
    }
}

export default rootReducer;