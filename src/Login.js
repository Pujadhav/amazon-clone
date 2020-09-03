import React,{useState} from 'react';
import './Login.css';
import {Link, useHistory} from 'react-router-dom';
import {auth} from './firebase';
function Login(){
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login=(e)=>{
        e.preventDefault();
        //do login logic....
      auth.signInWithEmailAndPassword(email,password)
      .then((auth)=>{
          //loggedin, redirect to homepage...
          history.push("/");
      })
      .catch(e=>alert(e.message));
    };
    const register=(e)=>{
        e.preventDefault();
        //do register logic....
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth=>{
            //created a user and logged in....
            history.push("/");
        })
        .catch(e=>alert(e.message));

    };
    return(
        <div className="loginpage">
            <Link to="/">
            <img className="loginpage_logo" src="../img/Loginpage_logo.png" alt=""/>
            </Link>
            <div className="loginpage_container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={e=>setEmail(e.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={e=>setPassword(e.target.value)} type="password"/>
                    <button type="submit" onClick={login } className="loginpage_signinButton">Sign In</button>
                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button onClick={register} className="loginpage_registerButton">Create your Amazon Account</button>
            </div>
        </div>
    );
}
export default Login;