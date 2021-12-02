import react from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div>
            <div className="navbar">
                <div className="navContainer">
                    <ul>
                        <Link to="/Home">Home</Link>
                        <Link to="/omMig">Om Mig</Link>
                        <Link to="/galleri">Galleri</Link>
                        <Link to="/order">Order</Link>
                    </ul>
                </div>
            
            </div>
            
        </div>
    ) 
}

  
export default Navbar;
  
    



