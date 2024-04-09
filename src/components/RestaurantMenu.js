import React,{ useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import {useParams} from "react-router-dom"
import { MENU_API } from '../utils/constants';
const RestaurantMenu = () => {
const [resInfo, setResInfo] = useState(null);
const [resInfoCard, setResInfoCard] = useState(null);

const {resId} = useParams();
  useEffect(()=>{
    fetchMenu();
  },[]);

  const fetchMenu  =  async ()=>{
const data = await fetch(MENU_API+resId);
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

  async function checkJsonCard(jsonData) {
    for (let i = 0; i < jsonData?.data?.cards.length; i++) {

      // initialize checkData for Swiggy Restaurant data
      let checkData = json?.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card;
      // if checkData is not undefined then return it
      if (checkData !== undefined) {
        return checkData;
      }
    } 
  }



  // call the checkJsonData() function which return Swiggy Restaurant data
  const resData = await checkJsonData(json);
  const resDataCard = await checkJsonCard(json);
  setResInfo(resData);
  setResInfoCard(resDataCard);

}
if(resInfo===null) {
return <Shimmer/>;
} 

const {name,cuisines,costForTwoMessage  } = resInfo;
  return  (
    <div className="menu">
      <h1>{name} </h1>
      <p>{cuisines.join(",")} -{costForTwoMessage}  </p>
      <ul>
        {
         resInfoCard.card.itemCards.map(item=> <li key={item.card.info.id}>{item.card.info.name}  -{"   Rs  "}{item.card.info.price /100 || item.card.info.defaultPrice /100}</li>)
        }
      </ul>
    </div>
  )
}

export default RestaurantMenu
