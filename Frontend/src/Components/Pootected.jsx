import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Pootected = (props) => {
    const Navigation=useNavigate();
    useEffect(() => {
       const login =localStorage.getItem('login'); 
       if(!login){
        Navigation('/login');
       
       }
    })
    const{component}=props;
  return (
    <>
    <h1>Abhishek Vishwakarma</h1>
   
    {component}
    
    
    </>
  )
}

export default Pootected