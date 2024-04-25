import { useEffect, useState } from "react";
import { RESTAURANT_API } from "../utils/constants";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Shimmer from "./Shimmer";
import { FiChevronLeft } from 'react-icons/fi';
import { BiChevronRight } from 'react-icons/bi';
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
const CardSlider = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        cardSlider();
    }, []);

    async function cardSlider() {
        try {
            const response = await fetch(RESTAURANT_API);
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const json = await response.json();
            const resData = checkJsonData(json);
            setRestaurants(resData);
        } catch (error) {
            setError("Failed to fetch data. Please try again later.");
        } finally {
            setLoading(false);
        }
    }

    function checkJsonData(jsonData) {
        const restaurantData = jsonData?.data?.cards.find(card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        return restaurantData?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    }

    if (loading) {
        return <Shimmer/> // Display a loading indicator
    }

    if (error) {
        return <div>Error: {error}</div>; // Display error message
    }
    
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    const ButtonGroup = ({ next, previous, ...rest }) => {
        return (
            <div className="carousel-button-group flex justify-between items-center w-full mb-4">
                <button className="block p-3 bg-slate-300" onClick={() => previous()}>
                    <FiChevronLeft />
                </button>
                <button onClick={() => next()}>
                    <BiChevronRight />
                </button>
            </div>
        );
    };

    return (
        <Carousel responsive={responsive} arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}>
            {restaurants.map((restaurant, index) => (
                 <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant.info.id}>
                 {restaurant.info.promoted ? <RestaurantCard {...restaurant?.info} /> : <RestaurantCard {...restaurant?.info} />}
               </Link>
            ))}
        </Carousel>
    );
};

export default CardSlider;
