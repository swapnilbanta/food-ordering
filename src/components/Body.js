import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import CardSlider from "./CardSlider";
import CricleCardSlider from "./CricleCardSlider";
import { useSelector } from "react-redux";
import { selectAddress } from "../utils/addressSlice";
import useRestaurant from "../utils/useRestaurant";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const onlineStatus = useOnlineStatus();
  const { address } = useSelector(selectAddress);
  const restaurants = useRestaurant();

  useEffect(() => {
    setFilterRestaurants(restaurants);
  }, [restaurants]);

  const handleTopRated = () => {
    const topRatedRestaurants = restaurants.filter((restaurant) => restaurant.info.avgRating > 4);
    setFilterRestaurants(topRatedRestaurants);
  };

  const handleVegRestaurant = () => {
    const vegRestaurants = restaurants.filter((restaurant) => restaurant.info.veg === true);
    setFilterRestaurants(vegRestaurants);
  };

  const handlePrice = () => {
    const cheapRestaurants = restaurants.filter((restaurant) => restaurant?.info?.costForTwo === "₹300 for two");
    setFilterRestaurants(cheapRestaurants);
  };

  const handleOffers = () => {
    const restaurantsWithOffers = restaurants.filter(
      (restaurant) => restaurant?.info?.aggregatedDiscountInfoV3?.discountTag === "FLAT DEAL"
    );
    setFilterRestaurants(restaurantsWithOffers);
  };

  const handleClearFilters = () => {
    setFilterRestaurants(restaurants);
  };

  const handleSearch = () => {
    const filteredRestaurants = restaurants.filter(restaurant => 
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    if (filteredRestaurants.length === 0) {
      // Return a message indicating no restaurants were found
      setFilterRestaurants([]);
    } else {
      setFilterRestaurants(filteredRestaurants);
    }
  };

  if (!onlineStatus) {
    return <h1>Looks like you're offline! Please check your internet connection.</h1>;
  }

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="mt-6 flex justify-center items-center">
        <h1 className="font-sans md:font-serif font-extrabold text-3xl">What's on your mind?</h1>
      </div>
      <CricleCardSlider />
      <br />
      <div className="mt-20 flex justify-center items-center">
        <h1 className="font-sans md:font-serif font-extrabold text-3xl">Top restaurant chains in {address.city}</h1>
      </div>
      <CardSlider />
      <div className="px-4 py-2 mt-16 m-2 flex justify-center items-center">
        <h1 className="font-sans md:font-serif font-extrabold text-3xl">Restaurants with online food delivery in {address.city}</h1>
      </div>
      <div className="filter flex justify-center items-center">
        <div className="Search m-4 p-4">
          <input
            type="search"
            placeholder="Search for Chicken Biriyani"
            className="p-2 px-4 rounded-md border outline-none focus-within:border-orange-400 border-gray-200 grow w-96"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="px-2 py-2 bg-green-100 m-2 rounded-lg" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="px-2 py-2 m-2 flex items-center">
          <button className="px-4 py-2 bg-gray-100 rounded-2xl" onClick={handleTopRated}>
            Ratings 4.0+
          </button>
        </div>
        <div className="px-2 py-2 m-2 flex items-center">
          <button className="px-4 py-2 bg-gray-100 rounded-2xl" onClick={handleVegRestaurant}>
            Pure Veg
          </button>
        </div>
        <div className="px-2 py-2 m-2 flex items-center">
          <button className="px-4 py-2 bg-gray-100 rounded-2xl" onClick={handleOffers}>
            Offers
          </button>
        </div>
        <div className="px-2 py-2 m-2 flex items-center">
          <button className="px-4 py-2 bg-gray-100 rounded-2xl" onClick={handlePrice}>
            Less than Rs.300
          </button>
        </div>
        <div className="px-2 py-2 m-2 flex items-center">
          <button className="px-4 py-2 bg-gray-100 rounded-2xl" onClick={handleClearFilters}>
            Clear Filters
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterRestaurants.length === 0 ? (
          <div className="px-2 py-2 m-2 flex items-center text-black">No restaurants found matching your search criteria.</div>
        ) : (
          filterRestaurants.map((restaurant) => (
            <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}>
              {restaurant.info.aggregatedDiscountInfoV3 ? (
                <RestaurantCard {...restaurant?.info} />
              ) : (
                <RestaurantCard {...restaurant?.info} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
