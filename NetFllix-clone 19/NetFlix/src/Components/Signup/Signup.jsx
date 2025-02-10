import React from 'react'
import { useState } from 'react';
import './Signup.css'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../ConfigFirebase/Config'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom';


function Signup() {
    let navigate=useNavigate()
    const [state,Setstat]=useState({name:"" ,email:"" ,phone:"" ,password:"" })
    const [error,setError]=useState()
    const [success,setSuccess]=useState(false)
    var  handle=(e)=>{
  const name=e.target.name;
  const valuename=e.target.value;
  const email=e.target.email;
  const valueemail=e.target.value;
  const phone=e.target.Phone;
  const valuephone=e.target.value;
  const password=e.target.Phone;
  const valuepassword=e.target.value;
  Setstat({...state,[name]:valuename,[email]:valueemail,[phone]:valuephone,[password]:valuepassword})
  
  }
  

// handle submit.....
const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!state.name) {
        setError("Please enter a valid frist name.");
        return; // Stop execution if validation fails 
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!state.email || !emailPattern.test(state.email)) {
        setError("Please enter a valid email address.");
        return; // Stop execution if validation fails
    }

    const phonePattern = /^[9|8|6]\d{9}$/;
    if (!state.phone || !phonePattern.test(state.phone)) {
        setError("Please enter a valid phone Number.");
        return; // Stop execution if validation fails 
    }



    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    if (!passwordPattern.test(state.password)) {
        setError(
            "Password must be at least 6 characters long, contain at least one uppercase letter, one number, and one special character"
        );
        return; // Stop execution if validation fails
    }
    console.log("Form submitted successfully!");
    setSuccess(true)

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, state.email, state.password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(userCredential, "usercrede")
            // ...
            const docRef = addDoc(collection(db, "users"), {
                id:userCredential.user.uid,
                name:state.name,
                PhoneNumber:state.phone

            });
            navigate('/login')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error, "errror")
            // ..
        })

}

// s...........



    return (
        <div>
         <header className="showcase">
                     <div className="logo-1">
                         <img className="logoImg"  alt=""  />
                     </div>
                     <div className="showcase-content">
                       <h3 style={{color:"red"}}>{error?error:"wlcome"}</h3> 
                         <div className="formm">
                         <form action='post' onClick={handleSubmit} >
                                 <h2 className="signHeading">Sign Up</h2>
                                 <div className="info">
                                    
     
                                   
                                     <input className="email" type="text" placeholder="Name" onChange={handle} name ="name" value={state.name}/> <br />
                                     <input className="email" type="text" placeholder="Email" onChange={handle} name ="email" value={state.email}/>
                                     <input className="email" type="text" placeholder="Phone no" onChange={handle} name ="phone" value={state.phone}/>
                                     <input className="email" type="password" placeholder="Password" onChange={handle} name ="password" value={state.password}/>
                                   
                                 </div>
                                 <div className="signbtn" >
                                     <button className="button" >Sign In</button>
                                     
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

export default Signup
