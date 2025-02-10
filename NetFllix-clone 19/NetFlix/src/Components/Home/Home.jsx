import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
function Home() {
  let navigate=useNavigate()
    return (
        <div>
          
          <header className="header">
            <img
              src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg"
              alt="Netflix logo"
              className="header__logo"
            />
            <nav className="header__menu">
              <a href="#" className="header__menu-item">
              <span className="span"><button onClick={()=>navigate('/login')}  className="sign">LogIn</button></span>
              </a>
             
            </nav>
          </header>
    
          <section className="hero" id="hero2" >
            <div className="hero__content">
              <h1 className="hero__title">Unlimited movies, TV shows, and more.</h1>
              <p className="hero__description">
                Watch anywhere. Cancel anytime.
              </p>
              <a href="#" className="hero__button">
                Watch Free For 30 Days
              </a>
            </div>
          </section>
    
          <section className="featured" style={{backgroundColor:"black"}}>
            <h2 className="featured__title" style={{color:"white"}}>Popular on Netflix</h2>
            <div className="featured__list">
              {/* Insert featured movie and TV show items here */}
            </div>
          </section>
    <div className="row">
      <div className="poster">
      <img src="https://e1.pxfuel.com/desktop-wallpaper/858/754/desktop-wallpaper-baahubali-pushpa-rrr-the-south-rises-as-bollywood-appears-fake-out-of-touch-bollywood-movie-poster-2022-thumbnail.jpg" width="330px"height="300px"/> 
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOzgGaMBWppUaQdOfFx29QgZX3WnUJ5tYy4w&usqp=CAU" width="322px"height="300px"/> 
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKij1ZA5bWQkHTUqnV9AjFWRrRQwST-YbM2A&usqp=CAU"width="321px"height="300px"/> 
      <img src="https://static.toiimg.com/thumb/msid-94394317,width-1280,resizemode-4/94394317.jpg"width="350px"height="300px"/> 
      </div>
    
     
    </div>
        </div>
      )
}

export default Home
