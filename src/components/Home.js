// import react from "react";
import Header from "./header";
import Footer from "./footer";
import Aida from "../images/Aida.png"
import title from "../images/title.png";
import photo1 from "../images/photo1.jpg"
import photo2 from "../images/photo2.jpg"
import photo3 from "../images/photo3.jpg"
import photo4 from "../images/photo4.jpg"
import { Link } from 'react-router-dom'
import "../cssFiles/home.css";

function Home() {
    
    return(
        <div>
        <Header />
        <div className="presentationSection">
            <img className="titlePic" src={title} alt="Title"></img>
            <div className="line"></div>
            <div className="profileSection">
                <img src={Aida} alt="aida"/>
                <div className="profileText">
                    <h2 className="subtitles">Välkommen till min sida</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex lorem, auctor sit amet ligula at, efficitur malesuada tortor. Maecenas at ullamcorper justo, at interdum nisi. Praesent et urna tortor. Mauris egestas facilisis ipsum ac fermentum. Morbi vel elit at ante molestie dapibus id vitae massa</p>
                    <p>Nulla vehicula vitae enim eget volutpat. Proin rhoncus aliquam ullamcorper. Integer venenatis consequat ex, vel tincidunt nisl posuere sed. Nam nisl leo, efficitur at posuere mollis, consequat sed dolor. Phasellus imperdiet elementum odio, non tristique sem rhoncus quis. Donec nec eros metus</p>            
                    <p>Phasellus a est a ligula condimentum tincidunt. Etiam fringilla pulvinar quam ut rutrum. Donec vel aliquam odio. Suspendisse potenti. Phasellus ullamcorper leo vitae magna auctor, eu sagittis ipsum iaculis. Ut at feugiat tortor. Duis accumsan massa lacus, a maximus elit sollicitudin eu.</p>             
                </div>
            </div>
            <div className="line"></div>
            <div className="pitruresSection">
            <img  src={photo1} alt="photo1"></img>
            <img  src={photo2} alt="photo2"></img>
            <img className="pic3" src={photo3} alt="photo3"></img>
            <img  src={photo4} alt="photo4"></img>
            </div>
            <h2 className="undertitleProfil">Fler bilder kan du se i galleriet</h2>
            <div className="WelcomeButtonArea">
            <button className="newOrderButton"> <Link to="/galleri">Galleri</Link></button>
            </div>
            <Footer />
        </div>
        
        
    </div>
) 
}

export default Home;
        



        
    
    