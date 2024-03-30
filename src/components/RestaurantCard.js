import React from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props)=>{
    console.log(props);
    const {resData} = props;
    const {name,cuisines,avgRating,costForTwo,deliveryTime} =  resData?.data;
      return  (
       
          <div className="res-card" style={{ backgroundColor:"#f0f0f0",}}>
          <img 
          className="res-logo"
          alt="res-logo"
          src={ CDN_URL+ resData.data.cloudinaryImageId}/>
  
  <h3>{name}</h3>
  <h3>{cuisines.join(",")}</h3>
  <h3>{avgRating}  stars</h3>
  <h3>Cost for Two {costForTwo/100}</h3>
  <h3>{deliveryTime}  minutes</h3>
  
          </div>
      );
  };

  export default RestaurantCard;