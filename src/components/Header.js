import React from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = ()=>{
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
    </ul>
</div>
 </div>
    );
};
