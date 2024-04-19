import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  costForTwo,
  avgRatingString,
  areaName
}) => {
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg h-60 w-auto"
        alt="res-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
      />

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h3>{cuisines.join(", ")}<br />{areaName}</h3>
      <h3>⭐{avgRatingString} stars</h3>
      <h3>{costForTwo ?? "₹200 for two"}</h3>
      {/* <h3>{sla?.lastMileTravelString ?? '2.0 km'}</h3> */}
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
  return ({ showPromotedLabel, ...props }) => {
    return (
      <div>
        {showPromotedLabel && (
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
            Promoted
          </label>
        )}
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
export { withPromotedLabel };
