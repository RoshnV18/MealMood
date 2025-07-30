import ItemList from "./ItemList";

const RestraunCategory = ({ resData, showIndex, setShowIndex, index }) => {
  const handleClick = () => {
    setShowIndex(showIndex === index ? null : index);
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-100  p-4  rounded-lg  shadow-sm">
      <div
        className="flex justify-between cursor-pointer "
        onClick={handleClick}
      >
        <span className="font-bold ">
          {resData.title} ({resData.itemCards.length})
        </span>
        <span className="text-xl mr-4">⬇️</span>
      </div>
      {showIndex === index && <ItemList items={resData?.itemCards} />}
    </div>
  );
};

export default RestraunCategory;
