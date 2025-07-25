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
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all  overflow-hidden  cursor-pointer min-h-[400px] min-w-[200px] flex flex-col justify-between">
      <div>
        <div className="relative overflow-hidden">
          <img
            src={
              cloudinaryImageId
                ? CDN_URL + cloudinaryImageId
                : "https://via.placeholder.com/660x480?text=Image+Unavailable"
            }
            alt={name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-semibold text-gray-800">
              {avgRating}
            </span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-1 truncate group-hover:text-orange-600 transition-colors duration-200">
            {name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {cuisines.join(", ")}
          </p>

          <div className="flex items-center justify-between text-gray-700 mb-3">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium">
                {sla?.deliveryTime} mins
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <DollarSign className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium">{costForTwo}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4 pt-3 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">
          Free Delivery
        </span>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default RestroCard;
