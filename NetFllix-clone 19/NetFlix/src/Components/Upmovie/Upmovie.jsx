import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import "../RowPost/RowPost.css"
import movieTrailer from 'movie-trailer'


function Upmovie(props) {
  console.log(props.upcoming, "pop")
  const [Action, SetAction] = useState([])
  const [overview, SetOver] = useState({})



  useEffect(() => {
    if (props.popular) {
      axios.get(props.popular).then((rep) => {
        SetAction(rep.data.results)
      })

    } else {
      axios.get(props.Latest).then((rep) => {
        console.log(props.upcoming, "propsss")
        console.log(rep.data.Search, "response fromaxios")

        SetAction(rep.data.Search)

      })
    }




  }, [])

  function click(obj) {
    console.log(obj, "objjjjjjj")
    axios.get("https://www.imdb.com/title/tt0084726/videogallery/").then((resp)=>{
      console.log(resp)
    })
  }


  // function OverView(e){
  // const obj=e
  // SetOver(obj)
  // // console.log(obj)
  // document.querySelector(".like").style. visibility="visible"
  // console.log(document.querySelector(".like"))

  // }
  // console.log(overview.overview,"overvee")
  return (
    <div className='row'>
      <h2 style={{color:"white"}}>{props.title ? props.title : props.name}</h2>
      <div className='posters'>

        {Action.map((obj) => {

          console.log(Action, "action")

          return (<img className='overimg' onClick={() => click(obj)} src={props ? obj.Poster : null} style={{ height: "250px" }} />)

        })}



      </div>

      <div className='overdiv'>
        <h1 className='overTilte'>{overview ? overview.original_title : ""}</h1>
        <p className='overview'>{overview ? overview.overview : ""} <button className='like'>like</button></p>

      </div>

      <div>
        {/* <img src='https://image.tmdb.org/t/p/original/qVdrYN8qu7xUtsdEFeGiIVIaYd.jpg' style={{height:"250px"}}/>  */}
      </div>

    </div>
  )
}

export default Upmovie
