import Shimmer from './Shimmer';
import {useParams} from "react-router-dom"
import useRestruantMenu from '../utils/useRestruantMenu';
import useRestruantMenuList from '../utils/useRestruantMenuList';
const RestaurantMenu = () => {
const {resId} = useParams();
const resInfo = useRestruantMenu(resId);
const resInfoCard = useRestruantMenuList(resId);
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
         resInfoCard?.card?.itemCards.map(item=> <li key={item.card.info.id}>{item.card.info.name}  -{"   Rs  "}{item.card.info.price /100 || item.card.info.defaultPrice /100}</li>)
        }
      </ul>
    </div>
  )
}

export default RestaurantMenu
