import react, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";


function Posts() {
    
    return(
        <div>
        <Header />
        <div className="presentationSection">
        <h2 className="galleriTemp">Posts</h2> 
        <Footer />
        </div>
      </div>
  ) 
}


export default Posts;