import react from "react";
import heroPic from "../images/heroPic.png"
import Navbar from "./navbar";


function Header() {
   
    
    return(
        
            <div className="heroContainer">
                <img src={heroPic} alt="Title"></img>
                <div>
                    <Navbar />
                </div>
            </div>
        
    ) 
}
export default Header;
    
    

  



