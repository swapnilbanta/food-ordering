import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestruantMenu";
import useRestaurantMenuList from "../utils/useRestruantMenuList";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const resInfoCard = useRestaurantMenuList(resId);

    if (resInfo === null || resInfoCard === null) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } = resInfo;
    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <ul>
                {resInfoCard.card.itemCards.map(item => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - Rs {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
