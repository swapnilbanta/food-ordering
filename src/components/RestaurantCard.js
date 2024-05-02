import React from "react";
import PropTypes from "prop-types";
import { CDN_URL } from "../utils/constants";
import { StarIcon } from '@heroicons/react/24/solid';

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  costForTwo,
  avgRatingString,
  areaName,
  aggregatedDiscountInfoV3
}) => {
  return (
    <>
      <div className="m-15 mt-2 mb-4 h-full p-4 w-[250px] rounded-lg overlay-container relative">
        {/* Image */}
        <img
          className="rounded-lg h-60 w-auto"
          alt="res-logo"
          src={`${CDN_URL}${cloudinaryImageId}`}
        />

        {/* Discount info overlay */}
        {aggregatedDiscountInfoV3 && (
          <div className="absolute top-0 left-0 bg-black text-white m-2 p-2 rounded-lg">
            <p className="text-sm font-semibold">{aggregatedDiscountInfoV3.header}</p>
            <p className="text-xs">{aggregatedDiscountInfoV3.subHeader}</p>
          </div>
        )}

        {/* Restaurant details */}
        <div className="mt-2">
          <h2 className="text-lg font-semibold">{name}</h2>
          <div className="flex items-center gap-2">
            <StarIcon className="w-6 h-6 text-orange-400" />
            <p className="font-semibold text-gray-700 text-sm">{avgRatingString}</p>
          </div>
          <p className="truncate text-zinc-600">
            {cuisines?.map((c, i) => (
              <span key={i}>
                {c}
                {i === cuisines.length - 1 ? '' : ', '}
              </span>
            ))}
          </p>
          <p className="text-zinc-600">{areaName}</p>
        </div>
      </div>
    </>
  );
};

RestaurantCard.propTypes = {
  cloudinaryImageId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
  costForTwo: PropTypes.string,
  avgRatingString: PropTypes.string.isRequired,
  areaName: PropTypes.string.isRequired,
  aggregatedDiscountInfoV3: PropTypes.shape({
    header: PropTypes.string,
    subHeader: PropTypes.string
  })
};

export default RestaurantCard;
