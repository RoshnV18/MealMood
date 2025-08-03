export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const BASE_BACKEND_URL = "https://mealmoodproxy.onrender.com";

export const swiggyUrl = `${BASE_BACKEND_URL}/api/restaurants?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING`;

export const getMenuUrl = (resId) =>
  `${BASE_BACKEND_URL}/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&submitAction=ENTER&restaurantId=${resId}`;
