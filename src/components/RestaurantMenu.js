import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestruantMenu";
import useRestaurantFilterData from "../utils/useRestaurantFilterData";
import ResCategory from "./ResCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const categories = useRestaurantFilterData(resId);


    if (resInfo === null || categories === null) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } = resInfo;
    
    return (
        <div className="text-center">
            <h1 className="font-bold my- text-2xl">{name}</h1>
            <p className="font-bold text-xl my-4">{cuisines.join(", ")} - {costForTwoMessage}</p>
        {categories.map((category)=>{
return <ResCategory  key={category?.card?.card?.title} data={category?.card?.card} />
            })
        }
        </div>
    );
};

export default RestaurantMenu;
