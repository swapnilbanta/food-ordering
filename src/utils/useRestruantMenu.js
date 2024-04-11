import { useEffect,useState } from "react";
import { MENU_API } from '../utils/constants';
const useRestruantMenu = (resId)=>{
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(MENU_API + resId);
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
        const resData = await checkJsonData(json);
        setResInfo(resData)
            
    }
  
return resInfo;
}
export default useRestruantMenu;