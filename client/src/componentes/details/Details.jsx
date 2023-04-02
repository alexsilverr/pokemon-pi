import React,{useState,useEffect} from 'react'
import { useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import './details.css';
export default function Details() {
   
    const pokemones=useSelector(store =>store.pokemon.pokemonId )
 
    const [state, setState] = useState();

   console.log(pokemones)

  
   
useEffect(() =>{
 setState(pokemones)
},[pokemones])

    if(state){
       
        return (
            <div className='caja-central'>
                <div className='caja-send'>
                <img className='immg' src={state.imag||state.img||state[0]?.img} alt={state?.name||state[0]?.name}width="200" height="200" />
                <p>_____________________</p>
                <section>
                  <h1>{state?.name||state[0]?.name}</h1>
           
                 <ul>
                    {
                        state?.stats?.map(e => <><li>{e.name}</li> <li>{e.value}</li></> ) 
                    }
                 </ul>
           
             
                 <ul>
                 {state[0]?.stats[0] && (
                    <ul>
                        <li>Hp:{state[0]?.stats[0]?.hp}</li>
                        <li>Speed:{state[0]?.stats[0]?.speed}</li> 
                        <li>Life:{state[0]?.stats[0]?.life}</li> 
                        <li>Defense:{state[0]?.stats[0]?.Defense}</li>  
                    </ul>
                    )}
                 </ul>
                </section>
                <Link to='/pokemon'onChange={()=>{setState('')}}>Atras</Link>
                </div>
               
                
            </div>
          )

    }else{
        return (
            <div>
                <br />
                <h1>no date</h1>
            </div>
          )
    }

}
