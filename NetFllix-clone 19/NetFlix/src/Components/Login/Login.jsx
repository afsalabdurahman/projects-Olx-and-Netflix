import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { useState,useContext } from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../ConfigFirebase/Config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
 import { db } from '../../ConfigFirebase/Config'
 import { UserContext } from '../../UserContext/userContext';
import {collection, query, orderBy, onSnapshot, where, doc, getDoc, getDocs} from "firebase/firestore"
function Login() {
let {user,setUser}=useContext(UserContext)
let navigate=useNavigate()
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState();
const [sucess, setSuccess] = useState(false)
// handle submission......
const  handleSubmit =  (e) => {
    e.preventDefault();
    console.log(email,password)
    console.log("handle working....")

    
    setError("");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return; // Stop execution if validation fails
    }
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        "Password must be at least 6 characters long, contain at least one uppercase letter, one number, and one special character"
      );
      return; // Stop execution if validation fails
    }
    console.log("Form submitted successfully!");
    setSuccess(true)

    //login
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.uid);  
  const q = query(collection(db, 'users'), where("id", "==", user.uid));
  getDocs(q)
  .then((querySnapshot) => {
    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
        
         setUser(doc.data())
        navigate('/logged')
      });
    } else {
      console.log('No documents found with the given id.');
    }
  })
  .catch((error) => {
    console.error("Error getting documents: ", error);
  });

        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        setError("In correct password")
    });


  }
//............



    return (
        <div>
            
    <header className="showcase">
                    <div className="logo-1">
                        <img className="logoImg"  alt=""  />
                    </div>
                    <div className="showcase-content">
                        <h4 style={{color:"red"}}>{error?error:null}</h4>
                        <div className="formm">
                            <form  onSubmit={handleSubmit}>
                                <h2 className="signHeading">Sign In</h2>
                                <div className="info">
                                    <input className="email" type="email" placeholder="Email " onChange={(e)=>setEmail(e.target.value)} name="email"  /> <br />
                                    <input className="email" type="password" placeholder="Password"  name="password"  onChange={(e)=>setPassword(e.target.value)}/>
                                </div>
                                <div className="signbtn">
                                    <button className="btn btnSign" type="submit" >Sign In</button>
                                </div>
                                <div className="help">
                                    <div>
                                        <input value="true" type="checkbox" style={{height:"18px",width:"18px"}} />
                                    </div>
                                    <label className='signColr'>Remember me</label>
                                    <a href="https://www.netflix.com/dz-en/LoginHelp" className='signColr need'>Need Help ?</a>
                                </div>
                            </form>
                        </div>
                        {/* <div className="fcbk">
                            <a href="https://facebook.com">
                                <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" />
                            </a>
                            <p>Login with Facebook</p>
                        </div> */}
                        <div className="signup">
                            <p className='signColr'>New to Netflix ?</p>
                            <a href="#" onClick={()=>navigate('/signup')}>Sign up now</a>

                        </div>
                        <div className="more">
                            <p className='signColr'>
                                This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a>
                            </p>
                        </div>
                    </div>
                <footer>
                    <div class="ftr-content">
                        <div class="contact">
                            <a>Quesions? <a href="tel:000-800-040-1843">000-800-040-1843
                        </a></a>
                        </div>
                        <div class="ftr">
                            <div>
                                <a>FAQ</a><br/><br/>
                                <a href="#">Cookie Prefrences</a>
                            </div>
                            <div>
                                <a >Help Center</a><br/><br/>
                                <a href="#">Corperate Information</a>
                            </div>
                            <div>
                                <a href="#">Terms of Use</a>
                            </div>
                            <div>
                                <a href="#">Privacy</a>
                            </div>
                        </div>
                        <select class="language">
                            <option value="">&#xF3EE; English</option>
                            <option value="">&#xF3EE; मराठी</option>
                            <option value="">&#xF3EE; हिन्दी</option>
                        </select>
                    </div>
                </footer>
                </header>
    
    
        </div>
      )
}

export default Login
