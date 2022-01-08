// import react from "react";
import Navbar from "./navbar";
import "../cssFiles/header.css"
import Headroom from "react-headroom";




function Header(props) {
    
    
    return(
        <Headroom>
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
        </Headroom>
        ) 
    }
    export default Header;
    
   
    
    
    

  



