import React, { useEffect } from "react";
import { useState} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
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

const onlineStatus =useOnlineStatus();
if(onlineStatus=== false){
  return( <h1>Looks like your offline! Please check your interent</h1>);

}
//Normal js variable
// let listofRestaruants = [];
    return listofRestaruants.length === 0 ?  <Shimmer/> : (
        <>
<div  className="body">
<div className="filter flex justify-center items-center">
  <div className="Search m-4 p-4">
    <input type="search"  
    placeholder="Search the restaruant"
    className="border border-solid border-black text-sm font-medium text-gray-900 dark:text-white" value={searchText}
    onChange={(e)=>{
      setSearchText(e.target.value);
    }}
    />
    <button className="px-4 py-2 bg-green-100 m-4  rounded-lg"onClick={()=>{
      //Filter the restaruant card and Update the UI
const fliterRestaruant = listofRestaruants.filter((restaurant)=>
  restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())

 );

 setListFilterRestaruant(fliterRestaruant);
    }}>Search</button>
  </div>
  <div className="px-4 py-2 m-4 flex items-center">
   <button  className="px-4 py-2 bg-gray-100  rounded-2xl" onClick={()=>{
// console.log('hello world');
//Filter logic
const filteredList = listofRestaruants.filter((restaurant)=>restaurant.info.avgRating>4);

setListofRestaruants(filteredList);
   }}>Top Rated Restaurant</button>
   </div>
</div>
<div className="flex flex-wrap">
{
    filterListRestaruant.map(
       (restaurant) =>
      //  console.log(restaurant)
       
     <Link   key={restaurant?.info?.id} to={"/restaurants/" + restaurant.info.id}>  <RestaurantCard {...restaurant?.info}/></Link>
    )
}


</div>
 </div>
 </>
    )
}


export default Body;