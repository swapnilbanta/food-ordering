import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, dummy}) => {
  const disptach = useDispatch();
  const handleAddItem =(item)=>{
    // dispatch an action

    disptach(addItem(item));

  }
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
          <div className="w-9/12">
            <div className="p-2 m-10">
              <span className="my-4">{item.card.info.name}</span>
              <span>- ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">  
              <button className="mx-5 p-2 rounded-lg bg-black text-white shadow-lg"
              onClick={()=>handleAddItem(item)}
              >Add +</button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;