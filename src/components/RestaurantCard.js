import React from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    sla,
    costForTwo,
    avgRatingString,
  }) => {
   
      return  (
       
          <div className="res-card" style={{ backgroundColor:"#f0f0f0",}}>
          <img 
          className="res-logo"
          alt="res-logo"
          src={CDN_URL+ cloudinaryImageId }/>
  
  <h3>{name}</h3>
  <h3>{cuisines.join(",")}</h3>
  <h3>  {avgRatingString} stars</h3>
  <h3>{costForTwo ?? '₹200 for two'}</h3>
  {/* <h3>{sla?.lastMileTravelString ?? '2.0 km'}</h3> */}
  
          </div>
      );
  };

  export default RestaurantCard;