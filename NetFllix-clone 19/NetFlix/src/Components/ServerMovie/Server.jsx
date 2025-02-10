import React, { useEffect } from 'react'
import { useState } from 'react'
import "../RowPost/RowPost.css"
import axios from 'axios'

function Server(props) {
    const [local, setLocal] = useState([])
    const [trailer,setTrailer]=useState("")
    useEffect(()=>{
axios.get("http://localhost:3000/movie").then((res)=>{
    setLocal(res.data)
})
    },[])

const click = (e) =>{
console.log(e,"eeeeeeee")
setTrailer(e.youtube_embed_trailer)
}


    return (
        <div className='row'>
          <h2 style={{color:"white"}}>{props.title ? props.title : ""}</h2>
          <div className='posters'>
    
            {local.map((obj) => {
    
              console.log(obj, "ooooooooo")
    
              return (<img className='overimg' onClick={() => click(obj)} src={props ? obj. picture : null} style={{ height: "250px" }} />)
    
            })}
    
          </div>
        {trailer?
          <div className='Fram' style={{marginLeft:"30em"}}>
      <iframe className='fram1' src={trailer} frameborder="0"         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <span style={{color:"red"}} onClick={()=>setTrailer("")}>close</span>
      </div> :null }
        </div>
        
      )
}

export default Server
