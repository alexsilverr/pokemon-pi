import { GETPOKEMON,GETPOKEMONAME,GETPOKEMONID,GETPOKEMONTYPE,GETPOKEMONTEAM} from "./action";
   const initialState = {
    
    
    pokemons: [],
    pokemonName: [],
    pokemonId: [],
    pokemonFilter: [],
    types: [],
    team: [],
    order: "",
    
    
 
   };
   
     export default function rootReducer (state=initialState,action){
        switch(action.type){
            case GETPOKEMON:
                return{
                  ...state,
                  pokemons: action.payload,
                };
                

            case GETPOKEMONAME:
              return{
                ...state,
                pokemonName: action.payload
              }

            case GETPOKEMONID:
              return{
                ...state,
                pokemonId: action.payload
              }
            case GETPOKEMONTEAM:
             return{
                ...state,
                team: action.payload
                }
            case GETPOKEMONTYPE:
              return{
                ...state,
                types: action.payload,
              };
               
            default:
              return state;
             
        }
     }