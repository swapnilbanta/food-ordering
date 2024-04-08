import React,{ useEffect, useState } from 'react'
import Shimmer from './Shimmer';


const RestaurantMenu = () => {
const [resInfo, setResInfo] = useState(null);
  useEffect(()=>{
    fetchMenu();
  },[]);

  const fetchMenu  =  async ()=>{
const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=622202&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
  const json = await data.json();
  async function checkJsonData(jsonData) {
    for (let i = 0; i < jsonData?.data?.cards.length; i++) {

      // initialize checkData for Swiggy Restaurant data
      let checkData = json?.data?.cards[i]?.card?.card?.info;
      // if checkData is not undefined then return it
      if (checkData !== undefined) {
        return checkData;
      }
    } 
  }

  // call the checkJsonData() function which return Swiggy Restaurant data
  const resData = await checkJsonData(json);
  setResInfo(resData);
}
console.log(resInfo);
// const {name,cuisines,costForTwoMessage  } = resInfo;
  return (resInfo===null) ? <Shimmer/>: (
    <div className="menu">
      <h1>{resInfo?.name} </h1>
      <p>{resInfo?.cuisines.join(",")} -{resInfo?.costForTwoMessage}  </p>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet coku</li>
      </ul>
    </div>
  )
}

export default RestaurantMenu
