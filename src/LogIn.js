import { Link,useNavigate} from 'react-router-dom';
import React ,{useState} from 'react';
import {db,auth} from "./Firebase";
import 'firebase/compat/auth';
import "./LogIn.css";
function LogIn() {
    const navigate=useNavigate();//useNavigate provide url travelling//can use useHistory()
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const SignIn=(e)=>{
     e.preventDefault();
     //firebase  login step....................
     auth.signInWithEmailAndPassword(email,password)
     .then((auth)=>{
        if(auth)
        navigate('/');
     }).catch(error=>error.message);
    }
    const register=(e)=>{
     e.preventDefault();
     //firebase register step...................
     auth.createUserWithEmailAndPassword(email,password)//createuserbyentered e,p (states)
     .then((auth)=>{//auth is object // finally created user
        if(auth){
            navigate("/");//history.push
        }
       
     }).catch((error)=>{
        alert(error.message);
     })
    
    }

  return (
    <div className='login'  >
      <Link to="/"  >
     <img 
     className='login_logo'src="https://www.signsallsigns.com/wp-content/uploads/2019/03/amazon-logo-transparent-300x300.png" alt="login " />
      </Link> 
      <div className='login_info'  >
      <h1>Sign-In</h1>
       <form>
        <h5>E-mail</h5>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}  />
        <h5>Password</h5>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit" className='sign_in_button'  onClick={SignIn} >Sign In</button>
       </form>
       <p>
       By creating an account, 
       you agree to Amazon's clone Conditions of Use and Privacy Notice.
       </p>
       <button onClick={register} className='login_register_button' >create your Amazon Account</button>

      </div>
    </div>
  );
}

export default LogIn;
