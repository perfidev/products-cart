import React from "react";
import CartItem from "./CartItem";

import { useCart } from "../../contexts/CartContext";
import { getTotalCartQuantity, getTotalCartPrice } from "../../utils/cartUtils";

function Cart({ onShowModal }) {
  const { state } = useCart();
  const totalCartQuantity = getTotalCartQuantity(state.cart);
  const totalCartPrice = getTotalCartPrice(state.cart);

  return (
    <div className="flex flex-col gap-6 p-6 rounded-[12px] bg-white">
      <h3 className="text-[1.5rem] font-bold leading-normal text-[#c73b07]">
        Your Cart ({totalCartQuantity})
      </h3>

      <ul className="flex flex-col gap-4">
        {state.cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>

      <hr className="w-full h-px border-0 bg-[#f5eeec]" />

      <div className="flex items-center justify-between">
        <p className="text-sm font-normal leading-normal text-[#260f08]">
          Order Total
        </p>
        <span className="text-[1.5rem] font-bold leading-normal text-[#260f08]">
          ${totalCartPrice}
        </span>
      </div>

      <div className="flex items-center gap-2 p-4 rounded-[8px] bg-[#fcf8f6]">
        <img src="/images/icon-carbon-neutral.svg" alt="" />
        <p className="text-sm font-normal leading-normal text-[#260f08]">
          This is a <strong className="font-semibold">carbon-neutral</strong>
          delivery
        </p>
      </div>

      <button
        onClick={() => onShowModal(true)}
        className="w-full py-4 px-6 rounded-full border-0 bg-[#c73b0f] font-inherit text-base font-semibold leading-normal text-white"
      >
        Confirm Order
      </button>
    </div>
  );
}

export default Cart;
