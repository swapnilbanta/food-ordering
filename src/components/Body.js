import React, { useEffect } from "react";
import { useState} from "react";
import RestaurantCard from "./RestaurantCard";
const Body = ()=>{

  //  state varaiable -  Super powerfull varaiable
const[listofRestaruants,setListofRestaruants] = useState(
 []
);



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
    // setFilteredRestaurants(resData);
  } catch (error) {
    console.log(error);
  }
}

if(listofRestaruants.length === 0){
  return <h1>Loading ....</h1>
}
//Normal js variable
// let listofRestaruants = [];
    return (
        <>
<div  className="body">
<div className="filter">
   <button className="filter-btn" onClick={()=>{
// console.log('hello world');
//Filter logic
const filteredList = listofRestaruants.filter((restaurant)=>restaurant.info.avgRating>4);

setListofRestaruants(filteredList);
   }}>Top Rated Restaurant</button>
</div>
<div className="res-container">
{
    listofRestaruants.map(
       (restaurant) =>
      //  console.log(restaruant)
       
       <RestaurantCard  key={restaurant?.info?.id} {...restaurant?.info}/>
    )
}


</div>
 </div>
 </>
    )
}


export default Body;