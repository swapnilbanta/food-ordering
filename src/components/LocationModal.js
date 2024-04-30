import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAddress } from '../utils/addressSlice';
import { closeLocationModal } from '../utils/appSlice';
import getLocation from '../utils/getLocation';
import { ArrowPathIcon, MapPinIcon } from '@heroicons/react/24/solid';
const LocationModal = ({ onClose }) => {
    const modalRef = useRef();
    const [isLoading, setisLoading] = useState(false);
    const dispatch = useDispatch();

    const getGeoLocation = async () => {
        try {
            setisLoading(true);

            const res = await getLocation();

            res && setisLoading(false);

            // set address
            dispatch(setAddress(res));

            // close modal
            onClose(); // Call the onClose function to close the modal

            // trigger fetch request
            // triggerGetRestaurants();
        } catch (error) {
            console.log(error);
        }
    };

    const handleModalClose = (e) => {
        onClose(); // Call the onClose function to close the modal
    };

    return (
        <div
            onClick={handleModalClose}
            className='bg-gray-900/70 fixed top-0 left-0 w-full h-full flex justify-center items-center z-50' // Adjust z-index
        >
            <div
                ref={modalRef}
                className='w-[90%] flex flex-col justify-center items-center max-w-[600px] m-auto p-8 bg-white rounded-md min-h-[240px] z-50' // Adjust z-index
            >
                <h1 className='text-2xl font-semibold'>
                    Please provide your location
                </h1>
                <button
                    onClick={getGeoLocation}
                    className='w-full max-w-[360px] flex justify-center items-center gap-2 border p-2 px-4 my-4 bg-gray-50 shadow-sm rounded-md'
                >
                    {isLoading ? (
                        <p className='flex items-center gap-2'>
                            Accessing...Please wait <ArrowPathIcon className='w-4 h-4' />
                        </p>
                    ) : (
                        <p className='flex items-center gap-2'>
                            Access my location <MapPinIcon className='w-4 h-4' />
                        </p>
                    )}
                </button>
            </div>
        </div>
    );
};

export default LocationModal;

