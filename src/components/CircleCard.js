import { CIRCLE_URL } from "../utils/constants";
const CircleCard = ({
    imageId

})=>{
return (
    <div className="m-15 mt-2 mb-4 h-full p-4 rounded-lg">
            <img 
                src={`${CIRCLE_URL}${imageId}`} 
                alt={`Circle ${imageId}`} 
                className="w-32 h-auto object-cover"
            />
        </div>
)
}
export default CircleCard;