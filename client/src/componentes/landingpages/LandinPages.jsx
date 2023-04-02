import React,{useEffect, useState} from 'react'
import { DotSpinner } from '@uiball/loaders'
import { Link } from "react-router-dom";
import { useDispatch,useSelector} from 'react-redux'
import { getPokemon, getPokemonType,getPokemonBase } from '../../Store/action';
import './landing.css'

export default function LandinPages() {
    const pokemones = useSelector(store =>store.pokemon.pokemons)
    const [isLoading, setIsLoading] = useState(true);

    const dispatch=useDispatch();
    useEffect(() => {
        
        dispatch(getPokemon())
        dispatch(getPokemonType());
        dispatch(getPokemonBase());
    
       
        
        
       
      },[]);
      useEffect(() => {
        if (pokemones.length > 0) {
          setIsLoading(false);
        }
      }, [pokemones]);
  
  return (
    
   <>
         {isLoading ? (
        <div className='spinner'> <DotSpinner size={60} speed={0.9} color='red'  />Loading...</div>
      ) : (
        <Link className='boxx' to='/pokemon'>
          

        </Link>
      )}
   </>
    
   
  )
}
