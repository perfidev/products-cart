import React from "react";

import { useCart } from "../../contexts/CartContext";

function CartItem({ item }) {
  const { dispatch } = useCart();

  return (
    <li className="relative flex justify-between items-center pb-4 border-b border-[#f5eeec] last:pb-0 last:border-b-0">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold leading-normal text-[#260f08]">
          {item.name}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold leading-[1.4] text-[#c73b0f]">
            {item.quantity}x
          </span>
          <span className="text-sm font-normal leading-[1.4] text-[#87635a]">
            @ ${item.price}
          </span>
          <span className="text-sm font-semibold leading-[1.4] text-[#87635a]">
            ${item.totalPrice}
          </span>
        </div>
      </div>

      <button
        className="flex items-center justify-center w-5 h-5 rounded-full border border-[#ad8a85] text-[#ad8a85] bg-transparent"
        onClick={() => dispatch({ type: "cart/delete", payload: item.id })}
      >
        <img src="/images/icon-remove-item.svg" alt="" />
      </button>
    </li>
  );
}

export default CartItem;
