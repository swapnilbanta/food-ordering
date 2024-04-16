import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
      const json = await response.json();
      const resData = checkJsonData(json);
      setRestaurants(resData);
      setFilterRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }

  function checkJsonData(jsonData) {
    const restaurantData = jsonData?.data?.cards.find(card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    return restaurantData?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
  }

  function handleSearch() {
    const filteredRestaurants = restaurants.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
    setFilterRestaurants(filteredRestaurants);
  }

  function handleTopRated() {
    const topRatedRestaurants = restaurants.filter(restaurant => restaurant.info.avgRating > 4);
    setFilterRestaurants(topRatedRestaurants);
  }

  if (!onlineStatus) {
    return <h1>Looks like you're offline! Please check your internet connection.</h1>;
  }

  return restaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter flex justify-center items-center">
        <div className="Search m-4 p-4">
        <input
    type="search"
    placeholder="Search the restaurant"
    class="border border-solid border-blue-500 text-sm font-medium text-gray-900 dark:text-white px-3 py-2 rounded-lg focus:outline-none focus:border-blue-700"
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
/>

          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={handleSearch}>Search</button>
        </div>
        <div className="px-4 py-2 m-4 flex items-center">
          <button className="px-4 py-2 bg-gray-100 rounded-2xl" onClick={handleTopRated}>Top Rated Restaurant</button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterRestaurants.map((restaurant) => (
          <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant.info.id}>
            {restaurant.info.promoted ? <RestaurantCard {...restaurant?.info} /> : <RestaurantCard {...restaurant?.info} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
