import {  useSelector ,} from "react-redux";
import {useState} from 'react'
import Card from "../card/Card";
import './team.css';

export default function Team() {
  const team=useSelector(store =>store.pokemon.team)

 
  const [state, setState] = useState(team || []);

  return (
    <div className="caja-team-home">
      <br/>
      <br/>
      <br/>
      <br/>
      <h1 className="team">Team</h1>
      <div className="caja-team">
        {
        
      
        state?.map(e => e.id && <Card key={e.id} {...e} />) 
        }
      </div>
    </div>
  )
}
