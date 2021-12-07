import WelcomePage from "./components/welcomePage";
import Home from "./components/Home";
import Galleri from "./components/galleri"
import Order from "./components/order";
import Post from "./components/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route  path="/" element={<WelcomePage />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/galleri" element={<Galleri />}/>
        <Route path="/order" element={<Order />}/>
        <Route path="/post" element={<Post />}/>
      </Routes>
      </div>
    </BrowserRouter>
      );
    }
    
    export default App;


    
        
    
    

        


  
