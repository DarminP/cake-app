// import react from "react";
import { Link } from 'react-router-dom';
import "../cssFiles/navbar.css";

function Navbar() {
    return(
        <div className="nav">
            <div className="navbar">
                <div className="navContainer">
                    <ul>
                        <Link className='link' to="/">Home</Link>
                        <Link className='link' to="/home">Om mig </Link>
                        <Link className='link' to="/galleri">Galleri</Link>
                        <Link className='link' to="/post">Posts</Link>
                        <Link className='link' to="/neworder">Beställning</Link>
                    </ul>
                </div>
            
            </div>
            
        </div>
    ) 
}

    
export default Navbar;

  
    



