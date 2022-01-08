// import react from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Header from "./header";
import Footer from "./footer";
import Photo1 from "../images/photo1.jpg"
import Photo1small from "../images/photo1-small.jpg"
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
import { Link } from 'react-router-dom'



function Galleri() {
    
    return(
        <div>
        <Header /> 
        <div className="presentationSection">
        <h2 className="subtitles">Galleri</h2> 
        <div className="gridContainer">
        <SRLWrapper>
        <a href={Photo1}></a>
        <img src={Photo1} alt="cake" 
        width={200}
        />
        
        <a href={Photo2}></a>
        <img src={Photo2} alt="cake2"
        width={200}
        />
        
        <a href={Photo3}></a>
        <img src={Photo3} alt="cake3"
        width={200}
        />

        <a href={Photo4}></a>
        <img src={Photo4} alt="cake4"
        width={200}
        />

        <a href={Photo5}></a>
        <img src={Photo5} alt="cake5"
        width={200}
        />

        <a href={Photo6}></a>
        <img src={Photo6} alt="cake6"
        width={200}
        />

        <a href={Photo7}></a>
        <img src={Photo7} alt="cake7"
        width={200}
        />

        <a href={Photo8}></a>
        <img src={Photo8} alt="cake8"
        width={200}
        />

        <a href={Photo9}></a>
        <img src={Photo9} alt="cake9"
        width={200}
        />

        <a href={Photo10}></a>
        <img src={Photo10} alt="cake10"
        width={200}
        />

        <a href={Photo11}></a>
        <img src={Photo11} alt="cake11"
        width={200}
        />

        <a href={Photo12}></a>
        <img src={Photo12} alt="cake12"
        width={200}
        />
        </SRLWrapper>
        </div>
        <Footer />
        </div>
        
      </div>
  ) 
}

export default Galleri;
        

    

    


