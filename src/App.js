import WelcomePage from "./components/welcomePage";
import Home from "./components/Home";
import Galleri from "./components/galleri"
import Post from "./components/Post";
import NewOrder from "./components/neworder";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import SimpleReactLightbox from 'simple-react-lightbox'
import './App.css';




function App() {

  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/galleri" element={<Galleri />}/>
        <Route path="/post" element={<Post />}/>
        <Route path="/neworder" element={<NewOrder />}/>
      </Routes>
      </div>
    </Router>
      );
    }
    
    export default App;


    
        
    
    

        


  
