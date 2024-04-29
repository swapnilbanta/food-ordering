import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Shimmer from "./Shimmer";
import { FiChevronLeft } from 'react-icons/fi';
import { BiChevronRight } from 'react-icons/bi';
import { useState } from 'react';
import { useEffect } from 'react';
import { RESTAURANT_API } from '../utils/constants';
import CircleCard from './CircleCard';
const CricleCardSlider = () => {
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
        const restaurantData = jsonData?.data?.cards.find(card => card?.card?.card);
        return restaurantData?.card?.card?.imageGridCards?.info || [];
    }

    if (loading) {
        return <Shimmer/>; // Display a loading indicator
    }

    if (error) {
        return <div>Error: {error}</div>; // Display error message
    }
    
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    const ButtonGroup = ({ next, previous }) => {
        return (
            <div className="absolute top-2/1 right-0 flex justify-center items-center mx-auto mt-4">
                <button className="block p-3 bg-slate-300 p-3 rounded-full border-2 p-2 text-3xl mr-4" onClick={() => next()}> {/* Added margin-right */}
                    <BiChevronRight />
                </button>
                <button className="block p-3 bg-slate-300 p-3 rounded-full border-2 p-2 text-3xl" onClick={() => previous()}>
                    <FiChevronLeft />
                </button>
            </div>
        );
    };
    
    return (
        <div className="mt-20 px-0"> {/* Add margin bottom to create space between Carousel and ButtonGroup */}
            <Carousel
                className="relative"
                responsive={responsive}
                arrows={false}
                renderButtonGroupOutside={true}
                customButtonGroup={<ButtonGroup />}
                customButtonGroupResponsive={true} // Ensure button group is responsive
                removeArrowOnDeviceType={["tablet", "mobile"]} // Remove arrows on smaller screens
                itemClass="carousel-item" // Add a class name for each carousel item
            >
                {restaurants.map((restaurant, index) => (
                    <div key={index} className="carousel-item"> {/* Apply styles to this wrapper */}
                        <CircleCard {...restaurant} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};
export default CricleCardSlider;
