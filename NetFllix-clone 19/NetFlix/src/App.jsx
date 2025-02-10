import { useState,useEffect,useContext } from 'react'
import './App.css'
import Nav from './Components/Navbar/Nav'
import Banner from './Components/Banner/Banner'
import Home from './Components/Home/Home'
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Upmovie from './Components/Upmovie/Upmovie'
import RowPost from './Components/RowPost/RowPost'
import{Upcoming,latestMovie} from './Components/Urlmovie/Url'
import Login from './Components/Login/Login'
import { UserContext } from './UserContext/userContext'
import Signup from './Components/Signup/Signup'
import { db } from './ConfigFirebase/Config'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, query, orderBy, onSnapshot, where, doc, getDoc,getDocs } from "firebase/firestore"
import Server from './Components/ServerMovie/Server'
function App() {
  let {setUser}=useContext(UserContext)
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
     
      if (user) {
        const uid = user.uid;
    const q = query(collection(db, "users"), where("id", "==", user.uid))
     getDocs(q).then((querySnapshot)=>{
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        setUser(doc.data())
      });
     })
   




      } else {
        console.timeLog("no user")
      }
    })
  },[])

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route index element={<Home />} />
     <Route path='/' element={<Home />}></Route>
   <Route path='/logged' element={<div style={{backgroundColor:"black"}}> <Nav/>  <Banner/>  <Server title="New Movie"/>  <Upmovie title="Upcoming" Latest={Upcoming}/> <RowPost title="Popular" Latest={latestMovie}/><RowPost title="Latest" Latest={Upcoming}/></div>}></Route>
     <Route path='/login' element={<Login/>}/>
     <Route path='/signup' element={<Signup/>}/>

     </Routes>
     
     </BrowserRouter>
       
    </>
  )
}

export default App
