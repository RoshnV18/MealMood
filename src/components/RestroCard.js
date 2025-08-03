import { Star, Clock, DollarSign } from "lucide-react";

const RestroCard = ({ resData }) => {
  const {
    name,
    cuisines = [],
    avgRating,
    cloudinaryImageId,
    costForTwo,
    sla,
  } = resData?.info || {};

  const CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  return (
    <div className="bg-gray-100 shadow-md hover:shadow-lg hover:bg-gray-200 cursor-pointer flex flex-col justify-between rounded-xl overflow-hidden transition-all duration-300 min-h-[360px] sm:min-h-[400px]">
      <div className="relative">
        <img
          src={
            cloudinaryImageId
              ? CDN_URL + cloudinaryImageId
              : "https://via.placeholder.com/660x480?text=Image+Unavailable"
          }
          alt={name}
          className="w-full h-40 sm:h-48 object-cover transition-transform duration-500"
        />

        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm font-semibold text-gray-800">
            {avgRating}
          </span>
        </div>
      </div>

      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <h3 className="text-base sm:text-lg font-bold text-gray-800 truncate mb-1">
          {name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2">
          {cuisines.join(", ")}
        </p>

        <div className="flex justify-between text-gray-700 mt-auto">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4 text-green-600" />
            <span className="text-xs sm:text-sm">{sla?.deliveryTime} mins</span>
          </div>
          <div className="flex items-center space-x-1">
            <DollarSign className="w-4 h-4 text-green-600" />
            <span className="text-xs sm:text-sm">{costForTwo}</span>
          </div>
        </div>
      </div>

      <div className="px-3 sm:px-4 pb-3 pt-2 border-t border-gray-200 flex items-center justify-between text-xs sm:text-sm text-gray-500">
        <span className="uppercase font-medium tracking-wide">
          Free Delivery
        </span>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default RestroCard;

export const withPromotedLabel = (RestroCardComponent) => {
  return ({ resData }) => {
    return (
      <div className="relative">
        <span className="absolute top-2 left-2 bg-black text-white text-[10px] sm:text-xs px-2 py-1 rounded z-10">
          PROMOTED
        </span>
        <RestroCardComponent resData={resData} />
      </div>
    );
  };
};
