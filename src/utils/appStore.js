import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice';
const appStore = configureStore({
    reducer: {
      cart: cartReducer // Corrected the reducer key to 'cart'
    }
  })
export default appStore;