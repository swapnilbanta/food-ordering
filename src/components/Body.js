import React from "react";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
const Body = ()=>{

  //  state varaiable -  Super powerfull varaiable
const[listofRestaruants,setListofRestaruants] = useState(
 resList
);

//Normal js variable
// let listofRestaruants = [];


  //Normal Js varaiable
    let listofRestaruantsJs = [ 
        {
        "data": {
          "id": "684427",
          "name": "Cafe Amudham",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "0bcdca61f3cd1e9135b98328593d044f",
          "cuisines": [
            "South Indian",
            "Snacks"
          ],
          "costForTwo": 40000,
          "deliveryTime": 29,
          "avgRating": "4.5",
        },    
      },
      {
        "data": {
          "id": "684427",
          "name": "KFC",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "0bcdca61f3cd1e9135b98328593d044f",
          "cuisines": [
            "South Indian",
            "Snacks"
          ],
          "costForTwo": 40000,
          "deliveryTime": 29,
          "avgRating": "3",
        },    
      },
      {
        "data": {
          "id": "334477",
          "name": "MCD",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "0bcdca61f3cd1e9135b98328593d044f",
          "cuisines": [
            "South Indian",
            "Snacks"
          ],
          "costForTwo": 40000,
          "deliveryTime": 29,
          "avgRating": "4.1",
        },    
      }
    ];

    let list = [];

    list = ['swapnil'];
    return (
        <>
<div  className="body">
<div className="filter">
   <button className="filter-btn" onClick={()=>{
// console.log('hello world');
//Filter logic
const filteredList = listofRestaruants.filter((res)=>res.data.avgRating>4);
console.log(listofRestaruants);

setListofRestaruants(filteredList);
   }}>Top Rated Restaurant</button>
</div>
<div className="res-container">
{
    listofRestaruants.map(
       (restaruant) =><RestaurantCard key={restaruant.data.id} resData ={ restaruant}/>
    )
}


</div>
 </div>
 </>
    )
}


export default Body;