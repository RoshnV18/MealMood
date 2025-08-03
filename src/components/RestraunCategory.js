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
    <div className="w-6/12 mx-auto my-4 bg-gray-100 p-4 rounded-lg shadow-sm">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {resData.title} ({resData.itemCards.length})
        </span>
        <span className="text-xl mr-4">{arrow}</span>
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
