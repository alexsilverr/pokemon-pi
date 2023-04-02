import {useState,useEffect} from 'react'
import {  useSelector ,useDispatch} from "react-redux";
import { getPokemon } from '../../Store/action';
import { orderMax,orderMin,orderFuerzaMax,orderFuerzaMin,searchName} from '../../tool/Tool';

import Card from '../card/Card';



import './home.css'



export default function Home() {
  const dispatch = useDispatch();
 //pokemones
  const pokemones=useSelector(store =>store.pokemon.pokemons)


  //team add
  const team=useSelector(store =>store.pokemon.team)
  console.log(team)
  //types 
  const type =useSelector(store =>store.pokemon.types?.map(e=>e.name))
  //pokmemones and types
  if(team){
    const allPokemons= [ ...pokemones,...team];
  }
  const allPokemons= [ ...pokemones,...team];
//state home 
  const [state,setState] = useState(allPokemons);
  const [types,setType] = useState(type);
  //error
  const[searchErro,setError] = useState();
 
   // filtrado 
   const order = (e) => {
   
    if(e.target.value === 'A-Z'){setState(orderMin(allPokemons))
      if(currentPage > 1){setCurrentPage(1)}}
    if(e.target.value === 'Z-A'){setState(orderMax(allPokemons))
      if(currentPage > 1){setCurrentPage(1)}}
    if(e.target.value === 'fuerza+'){setState(orderFuerzaMin(allPokemons))
      if(currentPage > 1){setCurrentPage(1)}}
    if(e.target.value === 'fuerza-'){setState(orderFuerzaMax(allPokemons))
      if(currentPage > 1){setCurrentPage(1)}}
    if(e.target.value === 'res'){dispatch(getPokemon())
      if(currentPage > 1){setCurrentPage(1)}}
  };

   //search
  const [busque, setBusq] = useState('');
 
  const handleInputChange = (e) => {
      e.preventDefault();
     
   const name = searchName(allPokemons,busque)
   console.log(name.length)
      if(name.length=== 0){
        alert(`no se encuentra el nombre:${busque}`) 
        
      }else{
        
        setState(name) 
      
      }
     
    };
  
 

  // pagination
      const pageSize = 15;
      const [currentPage, setCurrentPage] = useState(1);
      
       function handleNextPage() {
       setCurrentPage(currentPage + 1);
      }
   
       function handlePreviousPage() {
       setCurrentPage(currentPage - 1);
      } 
      
       
         const startIndex = (currentPage - 1) * pageSize;
         const endIndex = startIndex + pageSize;
    
         
         const pageOfPokemon  = state&&state.slice(startIndex, endIndex);  
       
         
         const tipos=(e)=>{

             const  typesToFilter=[e.target.value]
             
             setState(allPokemons.filter(pokemon => 
                  typesToFilter.some(type => pokemon.types.includes(type))
                ))
              if(currentPage > 1){setCurrentPage(1)}  
  
      }
 
  return (
    <div className='caja-home'>
     
       <div className='filter'>
        <form   onSubmit={handleInputChange}>
        <input type="text" className='filter'  onChange={e => setBusq(e.target.value)} placeholder="       P O K E M 0 N " />
        <button className="filter" type="submit">Search</button>
      </form>
       <select className='filter'  name="Ordenar" onChange={order} >
        <option value="res">Ordenar</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="fuerza+">MAX-FUERZA</option>
        <option value="fuerza-">MIN-FUERZA</option>
       </select>
     
       <select className='filter'  name="Type" onChange={tipos}>
          <option value="res">Tipo:</option>
          {
           types.map((e)=><option value={e}>{e}</option>)
          }
    
          
        </select> 
      <button className='filter' onClick={()=>{
        dispatch(getPokemon())
        setBusq('')
          }}>Refres</button>
       </div>
        <div className='box'>
        {
         pageOfPokemon?.map(res => <Card key={res.id} {...res}/>)
        }
    </div>
    <div className='page'>
            {
              <p>page:{currentPage}</p>
            }
    </div>
         
    <div className='boton-pag '>
            <button className='btn' onClick={handlePreviousPage} disabled={currentPage === 1}>
         
            <span>back</span>
            </button>
            <button className='btn '  onClick={handleNextPage} disabled={endIndex >= state.length}>
          
       
       
            <span>Next</span>
            </button> 
           

           
    </div>
    </div>
  
    
  )
}