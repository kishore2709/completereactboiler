import React from 'react';   

  
const DashboardLayout = props => (  
    <div className="page page-dashboard">  
      <div className="sidebar">
     
      </div>  
      <div className="main"> {props.children}</div>  
    </div>  
  )  
export default DashboardLayout;  