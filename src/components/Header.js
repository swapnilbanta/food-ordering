import React from "react";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = ()=>{
    const[btnName,upDateBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
   
    return (
<div className="header">
<div  className="logo-header">
    <img  alt="food_one"className="logo" src={LOGO_URL}/>
</div>
<div className="nav-items">
    <ul>
        <li>Online Status : {onlineStatus? "✅" : "🔴"  }</li>
    <li><Link to="/">Home</Link></li>
    <li><Link to ="/about">
    About  </Link></li>
    <li> <Link to="/contact" relative="path">Contact us </Link></li>
    <li> <Link to="/grocery" relative="path">Grocery</Link></li>
    <button className="login" onClick={()=>{
       btnName === "Login" ? upDateBtnName("Logout") : upDateBtnName("Login")
    }}>{btnName}</button>
    </ul>
</div>
 </div>
    );
};
