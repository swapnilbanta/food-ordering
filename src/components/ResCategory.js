import React from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data,showItems, setShowIndex,dummy,index}) => {
    const handleClick = () => {
        setShowIndex();
    };
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg my-12">{data.title}({data.itemCards.length})</span>
                    <span> ⬇️</span>
                </div>
                {showItems  && <ItemList items={data.itemCards}  dummy={dummy}/>}
            </div>
        </div>
    );
};

export default ResCategory;