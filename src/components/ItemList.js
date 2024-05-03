import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items}) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between relative">
          <div className="w-9/12">
            <div className="p-2 m-10">
              <span className="my-4">{item.card.info.name}</span>
              <span>- ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 flex flex-col justify-end items-center mt-2">
            <button className="mx-2 p-2 rounded-lg bg-white text-orange-500 shadow-lg absolute bottom-0 hover:bg-orange-500 hover:text-white transition duration-300"
                    onClick={() => handleAddItem(item)}>
              Add
            </button>
            <img src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
