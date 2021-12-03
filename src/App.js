import WelcomePage from "./components/welcomePage";
import Home from "./components/Home";
import Galleri from "./components/galleri"
import OmMig from "./components/omMig";
import Order from "./components/order";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route  path="/" exact element={<WelcomePage />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/galleri" element={<Galleri />}/>
        <Route path="/omMig" element={<OmMig />}/>
        <Route path="/order" element={<Order />}/>
        
      </Routes>
      </div>
    </BrowserRouter>
      );
    }
    
    export default App;


    
        
    
    

        


  
