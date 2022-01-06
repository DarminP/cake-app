import title from "../images/title.png";
import { Link } from 'react-router-dom';
import "../cssFiles/welcomePage.css"


function WelcomePage() {
    
    return(
        <div className="welcome-area">
        <div className="mainTitle">
        <img src={title} alt="Title"></img>
        </div>
        <div className="welcomeSection">
        <button className="welcomeButton"> <Link to="/home">Enter</Link></button>
        </div>
    </div>
    ) 
}
            
export default WelcomePage;