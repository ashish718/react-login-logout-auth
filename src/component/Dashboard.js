import React from "react";
import {Link, Redirect} from "react-router-dom"
import style from "./Style.module.css"

function Dashboard(){

const token =  localStorage.getItem("token");

  return(
    <div>

    {token==null?(<Redirect to="/" />):(
      <div className={style.dashHeading}>

        <h1>Dashboard Page show after auth Login</h1>
        <Link className={style.logout} to="/">Log Out</Link>

      </div>
    )}
    </div>
  )
}

export default Dashboard;
