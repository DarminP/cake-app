import react from "react";
import Header from "./header";
import Footer from "./footer";
import Photo1 from "../images/photo1.jpg"
import Photo2 from "../images/photo2.jpg"
import Photo3 from "../images/photo3.jpg"
import Photo4 from "../images/photo4.jpg"
import Photo5 from "../images/photo5.jpg"
import Photo6 from "../images/photo6.jpg"
import Photo7 from "../images/photo7.jpg"
import Photo8 from "../images/photo8.jpg"
import Photo9 from "../images/photo9.jpg"
import Photo10 from "../images/photo10.jpg"
import Photo11 from "../images/photo11.jpg"
import Photo12 from "../images/photo12.jpg"
import "../cssFiles/gallery.css"



function Galleri() {
    
    return(
        <div>
        <Header /> 
        <div className="presentationSection">
        <h2 className="galleryTitle">Galleri</h2> 
        <div className="gridContainer">
        <img src={Photo1}/>
        <img src={Photo2}/>
        <img src={Photo3}/>
        <img src={Photo4}/>
        <img src={Photo5}/>
        <img src={Photo6}/>
        <img src={Photo7}/>
        <img src={Photo8}/>
        <img src={Photo9}/>
        <img src={Photo10}/>
        <img src={Photo11}/>
        <img src={Photo12}/>
        </div>
        <Footer />
        </div>
        
      </div>
  ) 
}

export default Galleri;
        

    

    


