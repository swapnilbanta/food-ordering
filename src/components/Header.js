import React from "react";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = ()=>{
    const[btnName,upDateBtnName] = useState("Login");
   
    return (
<div className="header">
<div  className="logo-header">
    <img className="logo" src={LOGO_URL}/>
</div>
<div className="nav-items">
    <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact Us</li>
    <li>Cart</li>
    <button className="login" onClick={()=>{
       btnName === "Login" ? upDateBtnName("Logout") : upDateBtnName("Login")
    }}>{btnName}</button>
    </ul>
</div>
 </div>
    );
};
