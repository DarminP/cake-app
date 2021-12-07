import react from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div className="nav">
            <div className="navbar">
                <div className="navContainer">
                    <ul>
                        <Link to="/Home">Home</Link>
                        <Link to="/galleri">Galleri</Link>
                        <Link to="/order">Beställning</Link>
                        <Link to="/post">Posts</Link>
                    </ul>
                </div>
            
            </div>
            
        </div>
    ) 
}

    
export default Navbar;

  
    



