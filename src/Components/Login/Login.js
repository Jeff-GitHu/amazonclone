import React, { useState } from "react";
import { LoginStyle } from "../../Styles/StyledComponents";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../API/firebase";

var count = 1;

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [counter, setCounter] = useState(1);

  const login = (e) => {
    e.preventDefault();
    //Login logic with enabled firebase...
    count = count + 1;
    setCounter(count);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in, redirect to homepage...
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const resetPass = (e) =>{
    e.preventDefault();
    //send link for reset a password
    auth
      .sendPasswordResetEmail(email)
      .then(function(){
        alert('An email of reset password was send in your account!')
      })
      .catch((e)=> alert(e.message));
  }

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //created a user and logged in, redirect to homepage...
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <LoginStyle>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          ></input>
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          ></input>
          {
          counter > 3
              ? <button onClick={resetPass} type="submit" className="login_signInButton">
            Reset your password
                </button> 
              : <button onClick={login} type="submit" className="login_signInButton">
            Sign In
                </button>
          }
        </form>
        <p>
          By signing-in you agree to Amazon`s Condition of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button onClick={register} className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </LoginStyle>
  );
}

export default Login;
