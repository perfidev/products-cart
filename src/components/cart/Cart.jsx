import React from "react";
import CartItem from "./CartItem";

import { useCart } from "../../contexts/CartContext";
import { getTotalCartQuantity, getTotalCartPrice } from "../../utils/cartUtils";
import { formatCurrency } from "../../utils/helpers";

import {
  createOrder,
  createOrderItems,
  updateItemsQuantity,
} from "../../services/apiOrder";

function Cart({ onShowModal }) {
  const { state } = useCart();
  const totalCartQuantity = getTotalCartQuantity(state.cart);
  const totalCartPrice = getTotalCartPrice(state.cart);

  async function onConfirmOrder(cart, totalPrice, totalQuantity) {
    try {
      const order = await createOrder(totalQuantity, totalPrice);
      await createOrderItems(order, cart);
      await updateItemsQuantity(cart);

      onShowModal(true);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl font-bold leading-normal text-[#c73b07]">
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
          {formatCurrency(totalCartPrice)}
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
        onClick={() =>
          onConfirmOrder(state.cart, totalCartPrice, totalCartQuantity)
        }
        className="w-full py-4 px-6 rounded-full border-0 bg-[#c73b0f] font-inherit text-base font-semibold leading-normal text-white cursor-pointer hover:bg-[#952c0b] focus-visible:bg-[#952c0b] focus-visible:outline-none"
      >
        Confirm Order
      </button>
    </div>
  );
}

export default Cart;
