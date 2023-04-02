import axios from 'axios';


export const GETPOKEMON='GETPOKEMON'
export const GETPOKEMONAME='GETPOKEMONAME'git bra
export const GETPOKEMONID='GETPOKEMONID'
export const GETPOKEMONTYPE='GETPOKEMONTYPE'
export const GETPOKEMONTEAM='GETPOKEMONTEAM'

export const getPokemon =() => async (dispatch,getState) => {
  try {
    const response = await axios.get('http://localhost:3001/pokemons/');
    const pokemons = response.data;
  
    const pokemonsData = await Promise.all(pokemons.map(async pokemon => {
      const res = await axios.get(pokemon.url);
      const todos=[]
      return todos.push={
        id: res.data.id,
        name: res.data.name,
        height: res.data.height,
        weight: res.data.weight,
        types: res.data.types.map(({ type }) => type.name),
        img: res.data.sprites.other.home.front_default,
        stats: res.data.stats.map(({ stat, base_stat }) => ({ name: stat.name, value: base_stat })),
        
      }
     
      
    }));
    
    dispatch({
      type: "GETPOKEMON",
      payload: pokemonsData,
    });  
    
  } catch (error) {
    console.log(error);
  }
};
export const getPokemonName=(name) => async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/pokemons/${name}`);
      const data = response.data;
      
      dispatch({
        type: "GETPOKEMON",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
export const getPokemonId=(id) => async (dispatch)=>{ 
    try {
    if(id.length>3){
      const response = await axios.get(`http://localhost:3001/pokemons/team`);
     console.log(response.data.filter(e=>e.id=== id ))
    dispatch({
      type: "GETPOKEMONID",
      payload:response.data.filter(e=>e.id=== id ) ,
    });
    }else{
      const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
      const pokemons = response.data;
  
        const todos=[]
      
      dispatch({
        type: "GETPOKEMONID",
        payload:  todos.push={
          id: pokemons.id,
          name: pokemons.name,
          height: pokemons.height,
          weight: pokemons.weight,
          types: pokemons.types.map(({ type }) => type.name),
          img: pokemons.sprites.other.home.front_default,
          stats: pokemons.stats.map(({ stat, base_stat }) => ({ name: stat.name, value: base_stat })),   
        }
      ,
      });
    
    }     
    }catch (error){
        console.log(error)
    }
   
  }
export const getPokemonType=()=>async(dispatch)=>{ 
  try {
      
    const response = await axios.get('http://localhost:3001/types');
    const type = response.data;
    
    
    
    dispatch({
      type: GETPOKEMONTYPE,
      payload: type,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonBase=()=>async(dispatch)=>{ 
  try {    
    const response = await axios.get(`http://localhost:3001/pokemons/team`);
    dispatch({
      type: GETPOKEMONTEAM,
      payload:response.data ,
    });
  } catch (error) {
    console.log(error);
  }
};


  
