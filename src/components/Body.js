import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Gelocation from "./Geolocation";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const location =  Gelocation();
  useEffect(() => {
    getRestaurants();
  }, [location]);

  async function getRestaurants() {
    try {
      // const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location?.latitude}&lng=${location?.longitude}`);
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await response.json();
      const resData = checkJsonData(json);
        setRestaurants(resData);
        setFilterRestaurants(resData);
     
    } catch (error) {
      return <h1>{error}</h1>
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
      <div className="px-4 py-2 mt-5 m-2 flex items-center justify-center items-center">
        <h1 className="font-sans md:font-serif font-extrabold text-3xl">Restaurants with online food delivery in {restaurants[4].info.areaName}</h1>
      </div>
      <div className="filter flex justify-center items-center">
        <div className="Search m-4 p-4">
          <input
            type="search"
            placeholder="Search the restaurant"
            className="w-96 border border-solid border-blue-500 text-sm font-medium text-gray-900 dark:text-white px-3 py-2 rounded-lg focus:outline-none focus:border-blue-700"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="px-4 py-2 bg-green-100 m-2 rounded-lg" onClick={handleSearch}>Search</button>
        </div>
        <div className="px-4 py-2 m-2 flex items-center">
          <button className="px-4 py-2 bg-gray-100 rounded-2xl" onClick={handleTopRated}>Ratings 4.0+</button>
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
