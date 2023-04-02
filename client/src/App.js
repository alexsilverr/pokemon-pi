import NavBar from './componentes/navbar/NavBar'
import { Route } from "react-router-dom";
import './App.css';
import Home from './componentes/home/Home';
import LandinPages from './componentes/landingpages/LandinPages';
import Details from './componentes/details/Details';
import AddPokemon from './componentes/add/AddPokemon.jsx';
import Team from './componentes/team/Team';
import About from './componentes/about/About';




function App() {
  
  return (
    <> 
       
      
      
     <body>
     
     
      <Route exact path="/"> 
      <LandinPages/>
        
      </Route>
     
      <Route exact path="/pokemon">
      <NavBar />
        <br />
        <br />
       <Home/>
      </Route>
      <Route exact path="/create"> 
      <NavBar />
      <AddPokemon/>
        
      </Route>
      <Route exact path="/details">
       <NavBar />
        <Details/>
      </Route>
      <Route exact path="/team">
       <NavBar />
       <Team />
        
      </Route>
      <Route exact path="/about">
       <NavBar />
       <About />
      
        </Route>
     
      
     
    
    </body> 
  
    </>
  );
}


export default App;
