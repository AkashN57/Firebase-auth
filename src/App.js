import {auth} from "./firebase-config"
import {useEffect, useState} from "react"
import {createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, signOut} from "firebase/auth"
import "./styles.css";
function App() {
  
  //states
  const [regemail,setRegEmail] = useState("")
  const [regpass,setRegPass] = useState('')
  const [pass,setPass] = useState('')
  const [email,setEmail] = useState('')
  const [user,setUser] = useState({})
  //functions
  
  const signin = async ()=>{

    try{ await createUserWithEmailAndPassword(auth,regemail,regpass)}
    catch(error){alert(error.message)}
   
  }

  const login = async ()=>{
    try{
      await signInWithEmailAndPassword(auth,email,pass)
    }catch(error){alert(error.message)}
  }

  const logout = async ()=>{
    await signOut(auth)
  }

  useEffect(()=>{onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
  })},[])
  return (
    <div className="form">
   <div className="form-label">
    <h2>Create User</h2>
   <label for="regemail">Register Email</label>
   <input placeholder="Email ID"  id="regemail" onChange={(e)=>{setRegEmail(e.target.value)}}></input>
   <br></br><br></br>
   <label for="regpassword">Register Password</label>
   <input placeholder="Password" id="regpassword" onChange={(e)=>{setRegPass(e.target.value)}}></input>
   <br></br><br></br>
   <button onClick={signin}>Register</button>
   </div>

<div>
<h2>Login</h2>
<label for="email"> Email</label>
<input placeholder="Email ID" id="email" onChange={(e)=>{setEmail(e.target.value)}}></input><br></br><br></br>
<label for="password">Password</label>
<input placeholder="Password" id="password" onChange={(e)=>{setPass(e.target.value)}}></input><br></br><br></br>
<button onClick={login}>Login</button>
</div>

<div>
<h3>User Logged in : 
  {user?.email}</h3><br></br>

<button onClick={logout}>Sign Out</button>
</div>

</div>
  );
}

export default App;
