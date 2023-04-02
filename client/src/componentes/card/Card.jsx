import React from 'react'
import { useDispatch} from "react-redux";
import { Link } from 'react-router-dom'
import { getPokemonId } from '../../Store/action';
import './card.css';

export default function Card({name,id,types,stats,img,imag,}) {
  const dispatch=useDispatch()
  const attack = stats && stats[1];


  return (
    <Link className='caja-cartas' to='/details' onClick={() => dispatch(getPokemonId(id))}>
      <img className='img' src={img ||  imag } alt={name} width="100" height="100" />
      <div className='letras'>
        <p>Name</p>
        <h5>{name}</h5>
        <p>Attack</p>
        <h5>{attack?.value}</h5>
        <p>Id</p>
        <h5>{id}</h5>
        <p>Types</p>
        <h5>
          {Array.isArray(types)
            ? types.map((type,index) => <li key={index}>{type}</li>)
            : <li>{types}</li>
          }
        </h5>
      </div>
    </Link>
  );
}

