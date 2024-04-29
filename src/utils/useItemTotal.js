import { useSelector } from "react-redux";

import React from "react";

function useItemTotal() {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const getItemTotal = () => {
    let total =
      cartItems &&
      Object.values(cartItems)
        .map((item) => (item.card.info.price / 100) * 3)
        .reduce((acc, curr) => acc + curr, 0);

    return total;
  };

  return getItemTotal;
}
export default useItemTotal;