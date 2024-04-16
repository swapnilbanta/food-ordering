import { useEffect, useState } from "react";
import { MENU_API } from '../utils/constants';

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [resId]);

    const fetchData = async () => {
        try {
            const response = await fetch(MENU_API + resId);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            const resData = findRestaurantData(jsonData);
            setResInfo(resData);
        } catch (error) {
            console.error('Error fetching restaurant data:', error);
            setResInfo(null); // Reset data on error
        }
    };

    const findRestaurantData = (jsonData) => {
        const cards = jsonData?.data?.cards ?? [];
        for (const card of cards) {
            const info = card?.card?.card?.info;
            if (info) {
                return info;
            }
        }
        return null; // If no relevant data found
    };

    return resInfo;
};

export default useRestaurantMenu;
