import { useState,useEffect } from "react";
import { MENU_API } from '../utils/constants';
const useRestruantMenuList = (resId)=>{
     const [resInfoCard, setResInfoCard] = useState(null);
     useEffect(()=>{
        fetchData();
            },[]);
     const fetchData  =  async ()=>{
        const data = await fetch(MENU_API+resId);
          const json = await data.json();
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
          const resDataCard = await checkJsonCard(json);
          setResInfoCard(resDataCard);
     }
     return resInfoCard;
}

export default useRestruantMenuList;