import { useState, useEffect } from "react";
import { MENU_API } from '../utils/constants';

const useRestaurantFilterData = (resId) => {
    const [resInfoCard, setResInfoCard] = useState(null);
  
    useEffect(() => {
        fetchData();
    }, [resId]);
  
    const fetchData = async () => {
        try {
            const response = await fetch(MENU_API + resId);
            const jsonData = await response.json();
            const resDataCard = findResDataCard(jsonData);
            setResInfoCard(resDataCard);
        } catch (error) {
            console.error("Error fetching data:", error);
            setResInfoCard(null); // Reset data on error
        }
    };
  
    const findResDataCard = (jsonData) => {
        for (const card of jsonData?.data?.cards ?? []) {
            const cardGroup = card?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=>c?.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
            if (cardGroup) {
                return cardGroup;
            }
        }
        return null;
    };
  
    return resInfoCard;
  };
  export default useRestaurantFilterData;