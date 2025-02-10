import React, { useEffect } from 'react'
import { useState } from 'react'
import './RowPost.css'
import axios from 'axios';
// const apiUrl = import.meta.env.VITE_API_URL;
// const secretKey = import.meta.env.VITE_SECRET_KEY;
 
function RowPost(props) {
  
console.log(props,"props")

  
  const[Action,SetAction]=useState([])
useEffect(()=>{
  if(props.Latest){
    axios.get(props.Latest).then((datas)=>{
 
      SetAction(datas.data.Search)
    })
  }else{
    axios.get(props.Popular).then((datas)=>{
 
      SetAction(datas.data.Search)
    })
  }

},[])
function clickk(obj){
  console.log(obj,"clikkkk")
}


  return (
    <div className='row'>
        <h2 style={{color:"white"}}>{props.title?props.title:"null"}</h2>
        <div className='posters'>
         
          {Action.map((obj)=>{

return(    <img onClick={()=>clickk(obj,obj.name)}  className={props.small ? "small":'poster' } src={obj.Poster } alt="poster" srcset="" style={{height:"250px"}} />
)
          })}
     
        </div>
       
    
    </div>
    
  )
}

export default RowPost
