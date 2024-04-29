import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";
import OrderSummary from "./OrderSummary";

const Cart = ()=>{

    const cartItems = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());

    }
return <div className="text-center m-4 p-4">
   <h1 className="text-2xl font-bold">Cart</h1>
   <div className="w-6/12 m-auto">
    <button className="p-2 m-2 bg-black text-white rounded-lg"
    onClick={handleClearCart}
    >Clear Cart</button>
    {cartItems.length===0 && 
    <div>   <h1>Cart is empty, Add items to the cart</h1>
    <img 
    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
    className="h-45 w-40 mx-auto"
    />

     </div>
 
    }
    <ItemList items={cartItems }/>
    {/* <OrderSummary/> */}
   </div>
  
    </div>
}
export default Cart;