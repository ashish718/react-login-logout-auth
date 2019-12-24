import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import style from "./Style.module.css"

function Login(){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setisLoggedIn] = useState(false);


  //Get Username Value
  const getUsername = (e) =>{
    const nameInput = e.target.value;
    if (!checkInput(nameInput)) {
      return alert("Blank Field and characters /,\.^ not allowed")
    }
    setUsername(nameInput);
    console.log(nameInput);
  }

  //Get Password Value
  const getPassword = (e)=>{
    const passwordInput = e.target.value;
    if (!checkInput(passwordInput)) {
      return alert("Blank Field and characters /\,.^ not allowed")
    }
    setPassword(passwordInput);
    console.log(passwordInput);
  }

  //Check Input of User and prevent from special characters
  const checkInput = (enteredValue)=>{
    if (
        enteredValue.indexOf("\\") > -1 ||
        enteredValue.indexOf("'") > -1 ||
        enteredValue.indexOf("/") > 0 ||
        enteredValue.indexOf(",") > -1 ||
        enteredValue.indexOf(".") > -1 ||
        enteredValue.indexOf("^") > -1 ||
        enteredValue.length === 0
      ) {
        return false;
    }
    return true;
  }

  //Submmit Form user input and redirect
  const submitForm = (e)=>{
    e.preventDefault();
    const input1 = username;
    const input2 = password;
    if (input1==="Ashish" && input2==="Ashish123") {
      localStorage.setItem("token", "hjfgdskfgjfldkghfasdfghsdfgk")
      setisLoggedIn(true)
    }
    return false;
  }



  return(

    <div>

      {isLoggedIn?(<Redirect to="/Dashboard"/>):(

      <div  className={style.overlay}>

      <form onSubmit={submitForm} className={style.formContent}>
        <div className="form-group">
          <input type="text"  className="form-control" placeholder="Enter Username" value={username} onChange={getUsername}/>

        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Enter Password" value={password} onChange={getPassword}/>
        </div>
        <button type="submit" className="btn btn-primary">Sign In</button>
        <small className="form-text text-muted">For Login use Username: Ashish and Password: Ashish123 (case sensitive).</small>

      </form>

      </div>
      )}

    </div>
  )

}




export default Login;
