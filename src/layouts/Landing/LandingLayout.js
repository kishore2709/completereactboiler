import React from 'react';  
import Header from "./Header";
import Footer from "./Footer";
  
const LandingLayout  = props => (           
    <div>  
      <Header/>            
      {props.children} 
     <Footer/>                                   
    </div>  

  )
  
export default LandingLayout;  