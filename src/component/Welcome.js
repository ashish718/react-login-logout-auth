import React, {useState} from "react";
import Login from "./Login";

function Welcome(){

  const [show, setShow] = useState(false);

  const showLoginModal = (e)=>{
      setShow(true)
  }

  const closeLoginModal = (e)=>{
    setShow(false)
  }

localStorage.removeItem("token")


  return(

    <div>
    <h1>welcome!</h1>

    {!show?(<button className=" Login btn btn-primary" onClick={(e)=> {showLoginModal()}}>Login</button>):(
      <div className="login-container">
      <button className="btn btn-primary"  onClick={(e)=>{closeLoginModal()}}>Close</button>
        <Login />
      </div>
      )}
    </div>
  )
}

export default Welcome;
