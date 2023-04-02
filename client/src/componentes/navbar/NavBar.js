
import style from './navbar.module.css';
import { SiHomeadvisor } from "react-icons/si";
import { SiCodefactor} from "react-icons/si";
import { SiDrone } from "react-icons/si";
import { Si1001Tracklists } from "react-icons/si";
import { SiAurelia } from "react-icons/si";
import { Link } from "react-router-dom";




 const NavBar = () => {
 
 
  return (
    <div>
    <header className={ style.header } >

    
      <ul>
        
          <li><Link to="/"><SiHomeadvisor/></Link></li>
          <li><Link to="/pokemon"><SiDrone/></Link></li>
          <li><Link to="/create"><SiCodefactor/></Link></li>
          <li><Link  to="/team"><SiAurelia/></Link></li>
          <li><Link to="/about"><Si1001Tracklists/></Link></li>
      </ul>
    </header>
  </div>
  );
};
export default NavBar;