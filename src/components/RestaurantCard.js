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
  areaName
}) => {
  return (
    <div className="m-15 mt-2 mb-4 h-full p-4 w-[250px] rounded-lg">
      <img
        className="rounded-lg h-60 w-auto"
        alt="res-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
 <h2 className='text-lg font-semibold mt-2 text-zinc-800'>{name}</h2>
      <div className='flex items-center gap-2'>
        <StarIcon className='w-6 h-6 text-orange-400' />{' '}
        <p className='font-semibold text-gray-700 text-sm'>
          {avgRatingString}
        </p>
      </div>
      <p className='truncate  text-zinc-600'> {cuisines?.map((c, i) => (
          <span key={i}>
            {c}
            {i === cuisines.length - 1 ? '' : ', '}
          </span>
        ))}</p>
            <p className='text-zinc-600'>{  areaName}</p>
</div>

);
};

RestaurantCard.propTypes = {
cloudinaryImageId: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
cuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
costForTwo: PropTypes.string,
avgRatingString: PropTypes.string.isRequired,
};

const withPromotedLabel = (WrappedComponent) => {
return ({ aggregatedDiscountInfoV3, ...props }) => {
return (
<div>
{aggregatedDiscountInfoV3 && (
<label className="absolute bg-black text-white m-2 p-2 rounded-lg">
{withPromotedLabel}
</label>
)}
<WrappedComponent {...props} />
</div>
);
};
};

export default RestaurantCard;
export { withPromotedLabel };
