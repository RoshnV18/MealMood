import { useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { addItem } from "../utils/cartSlice";

const RestraunCategory = ({ resData, showIndex, setShowIndex, index }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    setShowIndex(showIndex === index ? null : index);
  };

  const isOpen = showIndex === index;
  const arrow = isOpen ? "⬆" : "⬇";

  return (
    <div className="w-full sm:w-10/12 md:w-8/12 lg:w-9/12 mx-auto my-4 bg-gray-100 p-4 rounded-lg shadow-sm transition-all">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-sm sm:text-base md:text-lg text-gray-800">
          {resData.title} ({resData.itemCards.length})
        </span>
        <span className="text-lg sm:text-xl mr-2 sm:mr-4">{arrow}</span>
      </div>

      {isOpen && (
        <ItemList
          items={resData.itemCards}
          buttoLabel="Add +"
          onClick={(item) => dispatch(addItem(item))}
        />
      )}
    </div>
  );
};

export default RestraunCategory;
