import React, { useState } from "react";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { selectAddress } from "../utils/addressSlice";
import LocationModal from "./LocationModal";
import { ChevronDownIcon,MapPinIcon,ShoppingBagIcon, HomeIcon,PhoneIcon,BuildingOfficeIcon } from "@heroicons/react/24/solid";

export const Header = () => {
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
      <div className="flex justify-between items-center h-30 bg-white shadow-lg mb-2 sm:bg-white lg:bg-white-20">
          <div className="logo-header flex items-center">
              <img alt="food_one" className=" w-40" src={LOGO_URL} />
              <button
                  onClick={handleOpenModal}
                  className='text-xs md:text-sm flex items-center gap-1'
              >
                  <MapPinIcon className='w-8 h-8 text-gray-700' />
                  {address && <><p className="text-lg">{address.city} </p><ChevronDownIcon className='w-6 h-6 text-orange-500' /></>}
              </button>
          </div>
          <div className="flex items-center">
              <ul className="flex p-4 m-4 capitalize text-lg font-semibold">
                  <li className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
                  <Link
                      to='/'
                      className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
                  >
                      <HomeIcon className='w-4 h-4 text-gray-700' /> <p>Home</p>
                  </Link>
                  <li>
                      <Link
                          to='/about'
                          className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
                      >
                          <BuildingOfficeIcon className='w-4 h-4 text-gray-700' />{' '}
                          <p>About</p>
                      </Link>
                  </li>
                  <li>
                      <Link
                          to='/contact'
                          className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
                      >
                          <PhoneIcon className='w-4 h-4 text-gray-700' />{' '}
                          <p>Contact</p>
                      </Link>
                  </li>
  
                  <Link
                      to='/cart'
                      className='p-2 relative md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
                  >
                      <ShoppingBagIcon className='w-4 h-4 text-gray-700' />{' '}
                      <p>Cart</p>
                      {
                          <p className='absolute -top-1 -right-1 bg-orange-500 text-white flex justify-center items-center w-5 h-5 text-xs rounded-full'>
                              {cartItems.length}
                          </p>
                      }
                  </Link>
              </ul>
          </div>
          {isModalOpen && <LocationModal onClose={handleCloseModal} />} {/* Conditionally render the modal */}
      </div>
  );
  
};
