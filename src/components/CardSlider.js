import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Shimmer from "./Shimmer";
import { FiChevronLeft } from 'react-icons/fi';
import { BiChevronRight } from 'react-icons/bi';
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import useRestaurant from "../utils/useRestaurant"; // Import the useRestaurant hook
import { useEffect, useState } from 'react';

const CardSlider = () => {
    const restaurants = useRestaurant(); 
    const [currentSlide, setCurrentSlide] = useState(0);
    const [disableButtons, setDisableButtons] = useState(false); // Add state for button disabling
    useEffect(() => {
        if (restaurants.length === 0) {
            setDisableButtons(true); // Disable buttons if there are no restaurants
        } else {
            setDisableButtons(false); // Enable buttons if there are restaurants
        }
    }, [restaurants]);// Use the useRestaurant hook

    if (!restaurants.length) {
        return <Shimmer />; // Display a loading indicator or handle empty data state
    }
    
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    const ButtonGroup = ({ next, previous, totalItems, currentSlide, disableButtons }) => {
        return (
            <div className="absolute top-2/1 right-0 flex justify-center items-center mx-auto mt-4">
                <button 
                    className={`block p-3 bg-slate-300 p-3 rounded-full border-2 p-2 text-3xl mr-4 ${currentSlide === 0 || disableButtons ? 'opacity-50 cursor-not-allowed' : ''}`} 
                    onClick={() => {
                        if (!disableButtons && currentSlide !== 0) {
                            previous();
                        }
                    }}
                    disabled={currentSlide === 0 || disableButtons}
                >
                    <BiChevronRight />
                </button>
                <button 
                    className={`block p-3 bg-slate-300 p-3 rounded-full border-2 p-2 text-3xl ${currentSlide === totalItems - 1 || disableButtons ? 'opacity-50 cursor-not-allowed' : ''}`} 
                    onClick={() => {
                        if (!disableButtons && currentSlide !== totalItems - 1) {
                            next();
                        }
                    }}
                    disabled={currentSlide === totalItems - 1 || disableButtons}
                >
                    <FiChevronLeft />
                </button>
            </div>
        );
    };
    
    return (
        <div className=""> {/* Add margin bottom to create space between Carousel and ButtonGroup */}
            <Carousel
                className="relative"
                responsive={responsive}
                arrows={false}
                renderButtonGroupOutside={true}
                customButtonGroup={<ButtonGroup />}
                customButtonGroupResponsive={true} // Ensure button group is responsive
                removeArrowOnDeviceType={["tablet", "mobile"]} 
                beforeChange={(previousSlide, nextSlide) => setCurrentSlide(nextSlide)} // Remove arrows on smaller screens
            >
                {restaurants.map((restaurant, index) => (
                    <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}>
                        {restaurant.info.promoted ? <RestaurantCard {...restaurant?.info} /> : <RestaurantCard {...restaurant?.info} />}
                    </Link>
                ))}
            </Carousel>
        </div>
    );
};

export default CardSlider;
