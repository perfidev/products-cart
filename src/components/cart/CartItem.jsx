import React from "react";

import { useCart } from "../../contexts/CartContext";

function CartItem({ item }) {
  const { dispatch } = useCart();

  return (
    <li>
      <div>
        <span>{item.name}</span>
        <div>
          <span>{item.quantity}x</span>
          <span>@ ${item.price}</span>
          <span>${item.totalPrice}</span>
        </div>
      </div>

      <button
        onClick={() => dispatch({ type: "cart/delete", payload: item.id })}
      >
        <img src="/images/icon-remove-item.svg" alt="" />
      </button>
    </li>
  );
}

export default CartItem;
