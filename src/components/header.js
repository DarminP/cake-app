import react from "react";
import Navbar from "./navbar";
import "../cssFiles/header.css"



function Header() {
    
    return(
        
        <div className="header">
            <div className="heroContainer">
               <div className="tagLines">
                    <h2>Lyx</h2>
                    <h2>Smak</h2>
                    <h2>Design</h2>
               </div> 
            </div>
            <div>
                 <Navbar />
            </div>
        </div>
        
        ) 
    }
    export default Header;
    
   
    
    
    

  



