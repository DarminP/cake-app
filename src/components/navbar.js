// import react from "react";
import { Link } from 'react-router-dom';
import "../cssFiles/navbar.css";

function Navbar() {
    return(
        <div className="nav">
            <div className="navbar">
                <div className="navContainer">
                    <ul>
                        <Link to="/Home">Home</Link>
                        <Link to="/galleri">Galleri</Link>
                        <Link to="/post">Posts</Link>
                        <Link to="/neworder">Beställning</Link>
                    </ul>
                </div>
            
            </div>
            
        </div>
    ) 
}

    
export default Navbar;

  
    



