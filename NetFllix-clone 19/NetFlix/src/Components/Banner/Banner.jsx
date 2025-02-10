import React from 'react'
import './Banner.css'
import { UserContext } from '../../UserContext/userContext'
import { useContext } from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate, Link, Navigate } from "react-router"
function Banner() {
  let navigate= useNavigate()
  const auth = getAuth();
  const signout = () => {
    console.log("workingd.......")
    signOut(auth)
           .then(() => {
               console.log("User logged out successfully");
               navigate("/login")
               // Optionally, you can redirect the user to a login page or handle the state accordingly
           })
           .catch((error) => {
               console.error("Error logging out: ", error);
           });    
   }

  let {user}=useContext(UserContext)


  
    return (
    
        <div className='banner'     >
       
            <div className='content'>
              {user?<button className='buttons' onClick={()=>signout()}>  <span className="name">Logout</span> {user.name} </button>:""}
           
                <h1 className='title'></h1>
                <div className ="banner_buttons"> 
                <button className='button'> Play</button>
                <button className='button'> My list</button>
                <button className='button'> Ai Recommendation</button>
             
                
                </div>  
                <h1 className='discription'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonscument or a typeface without </h1>
    
            </div>
          <div className='fade_button'></div>
        </div>
      )
}

export default Banner
