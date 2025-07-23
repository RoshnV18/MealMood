import { CDN_URL } from "../utils/constants";

const RestroCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    cloudinaryImageId,
    costForTwo,
  } = resData?.info;
  return (
    <div className="restro-card">
      <img src={CDN_URL + cloudinaryImageId} />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
export default RestroCard;
