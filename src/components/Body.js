import React, { useEffect } from "react";
import { useState} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = ()=>{

  //  state varaiable -  Super powerfull varaiable
const[listofRestaruants,setListofRestaruants] = useState(
 []
);
const[filterListRestaruant,setListFilterRestaruant] = useState([]);
const[searchText,setSearchText ] = useState("");

useEffect(()=>{
getRestaurants();
},[]);
async function getRestaurants() {
  // handle the error using try... catch
  try {
    const response = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
    const json = await response.json();

    // initialize checkJsonData() function to check Swiggy Restaurant data
    async function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {

        // initialize checkData for Swiggy Restaurant data
        let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    // call the checkJsonData() function which return Swiggy Restaurant data
    const resData = await checkJsonData(json);

  

    // update the state variable restaurants with Swiggy API data
    setListofRestaruants(resData);
    setListFilterRestaruant(resData);
    // setFilteredRestaurants(resData);
  } catch (error) {
    console.log(error);
  }
}


//Normal js variable
// let listofRestaruants = [];
    return listofRestaruants.length === 0 ?  <Shimmer/> : (
        <>
<div  className="body">
<div className="filter">
  <div className="Search">
    <input type="search"  className="search-box" value={searchText}
    onChange={(e)=>{
      setSearchText(e.target.value);
    }}
    />
    <button onClick={()=>{
      //Filter the restaruant card and Update the UI
const fliterRestaruant = listofRestaruants.filter((restaurant)=>
  restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())

 );

 setListFilterRestaruant(fliterRestaruant);
    }}>Search</button>
  </div>
   <button className="filter-btn" onClick={()=>{
// console.log('hello world');
//Filter logic
const filteredList = listofRestaruants.filter((restaurant)=>restaurant.info.avgRating>4);

setListofRestaruants(filteredList);
   }}>Top Rated Restaurant</button>
</div>
<div className="res-container">
{
    filterListRestaruant.map(
       (restaurant) =>
      //  console.log(restaruant)
       
     <Link   key={restaurant?.info?.id} to={"/restaurants/" + restaurant.info.id}>  <RestaurantCard {...restaurant?.info}/></Link>
    )
}


</div>
 </div>
 </>
    )
}


export default Body;