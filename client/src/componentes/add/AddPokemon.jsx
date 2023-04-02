import { getPokemonBase} from "../../Store/action";
import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import './addPokemon.css';

export default function AddPokemon() {
  
    const dispatch=useDispatch();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [life, setVida] = useState(0);
  const [vidaError, setVidaError] = useState('');
  const [error, setError] = useState('');
  const [hp, setFuerza] = useState(0);
  const [defense, setDefensa] = useState(0);
  const [speed, setVelocidad] = useState(0);
  const [height, setAltura] = useState(0);
  const [weight, setPeso] = useState(0);
  const [type, setTipo] = useState('');
  const [url, setUrl] = useState('https://media3.giphy.com/media/DRfu7BT8ZK1uo/giphy.gif?cid=ecf05e47gnw179bell2grclua6wv313jklkjigupmkui19nl&rid=giphy.gif&ct=g');
  const [status, setStatus] = useState('');
  useEffect(() => {  
      dispatch(getPokemonBase())
    },[ ]);
  
 

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(url)
    if(!name){
      setNameError('El nombre es requerido');
    }
    if(isNaN(life)||isNaN(hp)||isNaN(defense)||isNaN(speed)||isNaN(height)||isNaN(weight)) {
      setVidaError('La vida debe ser un número');
    }if(life.lenght>0||hp.lenght>0||defense.lenght>0||speed.lenght>0||height.lenght>0||weight.lenght>0){
      setError('debe ser mayor de 0')
    }
    else{
  
      axios.post('http://localhost:3001/pokemons/', {
        name,
        life,
        hp,
        defense,
        speed,
        height,
        weight,
        type,
        url
      })
      .then(response => setStatus(response.status))
      .catch(error => console.error(error));
    }
    if(status===200) setStatus('pokemon creado')
  }

  return (
  <>
  
      <div className='box-central'>
        <h1 className='titulo'>CREATE POKEMON</h1>
      <form className=' form' onSubmit={handleSubmit}>
       
       <label >
       
         <input className="input"  placeholder={'Name'} type="text" onChange={e => setName(e.target.value)} />
         {nameError && <h5 >{nameError}</h5>}
       </label>
       <br />
       <label className=''>
       
         <input className="input" placeholder={'Life'}  type="number"  onChange={e => setVida(e.target.value)} />
         {vidaError && <h5 >{vidaError}</h5>}
         {error&&<h5>{error}</h5>}
       </label>
       <br />
       <label className=''>
         
         <input className="input" placeholder={'Hp'}  type="number"  onChange={e => setFuerza(e.target.value)} />
         {vidaError && <h5 >{vidaError}</h5>}
         {error&&<h5>{error}</h5>}
       </label>
       <br />
       <label className=''>
       
         <input className="input" placeholder={'Defense'}  type=""  onChange={e => setDefensa(e.target.value)} />
         {vidaError && <h5 >{vidaError}</h5>}
         {error&&<h5>{error}</h5>}
       </label>
       <br />
       <label className=''>
       
         <input className="input" placeholder={'Speed'}  type="number"  onChange={e => setVelocidad(e.target.value)} />
         {vidaError && <h5 >{vidaError}</h5>}
         {error&&<h5>{error}</h5>}
       </label>
       <br />
       <label className=''>
       
         <input className="input" placeholder={'Height'}  type="number" onChange={e => setAltura(e.target.value)} />
         {vidaError && <h5 >{vidaError}</h5>}
         {error&&<h5>{error}</h5>}
       </label>
       <br />
       <label className=''>
       
         <input className="input" placeholder={'Weight'}   type="number" onChange={e => setPeso(e.target.value)} />
         {vidaError && <h5 >{vidaError}</h5>}
         {error&&<h5>{error}</h5>}
       </label >
       <br />
       <label className='' >
       
         <input className="input" placeholder={'Type'} type="text" onChange={e => setTipo(e.target.value)} />
      

       </label>
       <label className='' >
       <br />
       Url-img<br/>
         <input type="text" placeholder={'https://media3.giphy.com/media/DRfu7BT8ZK1uo/giphy.gif?cid=ecf05e47gnw179bell2grclua6wv313jklkjigupmkui19nl&rid=giphy.gif&ct=g'} onChange={e => setUrl(e.target.value)} />
        
       </label>
       <br />
       <img src={'https://media3.giphy.com/media/DRfu7BT8ZK1uo/giphy.gif?cid=ecf05e47gnw179bell2grclua6wv313jklkjigupmkui19nl&rid=giphy.gif&ct=g'} width={40} height={40} />
         
       <button className='' type="submit">CREATE</button>
       {status===200 && alert('pokemon creado!!')}
     </form>
        
      </div>

    
    </>
  )
}
