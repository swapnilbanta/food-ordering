import { useSelector } from "react-redux";
import { RESTAURANT_API } from "./constants";
import { useEffect, useState } from "react";
import { selectAddress } from "./addressSlice";
function useRestaurant() {
    const {address} = useSelector(selectAddress);
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        getRestaurants();
      },[]);
      async function getRestaurants() {
        try {
          const response = await fetch(`${RESTAURANT_API}?lat=${address.latitude}&lng=${address.longitude}`);
          const json = await response.json();
          const resData = checkJsonData(json);
          setRestaurants(resData);

        } catch (error) {
          console.log(error);
        }
      }
      function checkJsonData(jsonData) {
        const restaurantData1 = jsonData?.data?.cards.find(card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        return restaurantData1?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      }

      return restaurants;
    

}
export default useRestaurant;
