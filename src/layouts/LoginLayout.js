import React from 'react';  
import Header from "./header";
import Footer from "./Footer";
  
const LoginLayout  = props => (           
    <div>  
      <Header/>            
      {props.children} 
     <Footer/>                                   
    </div>  

  );  
  
export default LoginLayout;  