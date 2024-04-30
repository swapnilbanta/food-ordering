import React, { useState } from "react";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { FiHome, FiInfo, FiPhone, FiShoppingCart, FiLogIn, FiLogOut } from "react-icons/fi";
import useOnlineStatus from "../utils/useOnlineStatus";
import { selectAddress } from "../utils/addressSlice";
import LocationModal from "./LocationModal";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal open/close

    const onlineStatus = useOnlineStatus();
    const cartItems = useSelector((store)=> store.cart.items);
    const {address} = useSelector(selectAddress);

    const handleOpenModal = () => {
        setIsModalOpen(true); // Open the modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
        <div className="flex justify-between h-30 bg-white shadow-lg mb-2 sm:bg-white lg:bg-white-20">
        <div className="logo-header">
                <img alt="food_one" className="w-56" src={LOGO_URL} />
            </div>
            <button
                onClick={handleOpenModal}
                className='text-xs md:text-sm flex items-center gap-1'
            >
                {address && <><p  className="text-lg">{address.city} </p><ChevronDownIcon className='w-4 h-4 text-orange-500' /></>}
            </button>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 capitalize text-lg font-semibold ">
                    <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4"><Link to="/"><FiHome /> Home</Link></li>
                    <li className="px-4"><Link to="/about"><FiInfo /> About</Link></li>
                    <li className="px-4"><Link to="/contact"><FiPhone /> Contact us</Link></li>
                    <li className="px-4"><Link to="/cart"><FiShoppingCart /> Cart - ( {cartItems.length} ) items</Link></li>
                    <button className="login" onClick={() => {
                        setBtnName(btnName === "Login" ? "Logout" : "Login");
                    }}>{btnName === "Login" ? <FiLogIn /> : <FiLogOut />} {btnName}</button>
                </ul>
            </div>
            {isModalOpen && <LocationModal onClose={handleCloseModal} />} {/* Conditionally render the modal */}
        </div>
    );
};
