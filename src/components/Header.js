import React from "react";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom"

export const Header = ()=>{
    const[btnName,upDateBtnName] = useState("Login");
   
    return (
<div className="header">
<div  className="logo-header">
    <img  alt="food_one"className="logo" src={LOGO_URL}/>
</div>
<div className="nav-items">
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to ="/about">
    About  </Link></li>
    <li> <Link to="/contact" relative="path">Contact us </Link></li>
    <li>Cart</li>
    <button className="login" onClick={()=>{
       btnName === "Login" ? upDateBtnName("Logout") : upDateBtnName("Login")
    }}>{btnName}</button>
    </ul>
</div>
 </div>
    );
};
