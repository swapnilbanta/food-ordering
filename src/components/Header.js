import React from "react";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { FiHome, FiInfo, FiPhone, FiShoppingCart, FiLogIn, FiLogOut } from "react-icons/fi"; // Import icons from react-icons
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
    const [btnName, upDateBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-red-200 lg:bg-green-50">
            <div className="logo-header">
                <img alt="food_one" className="w-56" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 capitalize text-lg font-semibold ">
                    <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4"><Link to="/"><FiHome /> Home</Link></li>
                    <li className="px-4"><Link to="/about"><FiInfo /> About</Link></li>
                    <li className="px-4"><Link to="/contact"><FiPhone /> Contact us</Link></li>
                    <li className="px-4"><Link to="/grocery"><FiShoppingCart /> Grocery</Link></li>
                    <button className="login" onClick={() => {
                        btnName === "Login" ? upDateBtnName("Logout") : upDateBtnName("Login")
                    }}>{btnName === "Login" ? <FiLogIn /> : <FiLogOut />} {btnName}</button>
                </ul>
            </div>
        </div>
    );
};
