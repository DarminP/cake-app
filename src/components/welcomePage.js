import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import title from "../images/title.png";



function WelcomePage() {
    
    return(
        
        <div>
            <Fragment>
                <Helmet>
                    <style>
                    {`
                        html, body {
                            height: 100%;
                            width: 100%;
                            opacity: 0.9;
                        }
                        body {
                            background-image: url("/background.png");
                            background-size: cover;
                            background-repeat: no-repeat;
                            background-position: center;
                            background-size: auto 100%;
                            background-color: white;
                        }
                    `}
                    </style>
                </Helmet>
            </Fragment>
            <div className="mainTitle">
            <img src={title} alt="Title"></img>
            </div>
            <div className="welcomeSection">
            <button className="welcomeButton"> <a href="/home" >Enter</a></button>
            </div>
        </div>
        ) 
    }
   
                            
                    
            
            
       
                   
               
            
            
               
            
                




        
        
          
        export default WelcomePage;
            
                                
            
                            
        





                        
  
  
    
           
                     
                        
