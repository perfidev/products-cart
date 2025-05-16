import React from "react";
import OrderItem from "./OrderItem";

import { useCart } from "../../contexts/CartContext";
import { getTotalCartPrice } from "../../utils/cartUtils";

function Order({ onShowModal }) {
  const { state, dispatch } = useCart();
  const totalCartPrice = getTotalCartPrice(state.cart);

  const handleNewOrder = () => {
    dispatch({ type: "cart/clear" });
    onShowModal(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[998]">
      <div className="flex flex-col gap-8 absolute bottom-0 w-full pt-10 pb-6 px-6 rounded-t-[12px] bg-white z-[999]">
        <div className="flex flex-col gap-6">
          <img
            src="/images/icon-order-confirmed.svg"
            alt=""
            className="w-12 h-12"
          />

          <div className="flex flex-col gap-2">
            <h4 className="text-[2.5rem] font-bold leading-[1.2] text-[#260f08]">
              Order Confirmed
            </h4>
            <p className="text-sm font-normal leading-[1.5] text-[#87635a]">
              We hope you enjoy your food!
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 p-6 rounded-[8px] bg-[#fcf8f6]">
          <ul className="flex flex-col gap-4 list-none">
            {state.cart.map((item) => (
              <OrderItem key={item.id} item={item} />
            ))}
          </ul>

          <hr className="w-full h-px border-0 bg-[#f5eeec]" />

          <div className="flex items-center justify-between">
            <p className="text-sm font-normal leading-[1.4] text-[#260f08]">
              Order total
            </p>
            <span className="text-2xl font-bold leading-normal text-[#260f08]">
              ${totalCartPrice}
            </span>
          </div>
        </div>

        <button
          onClick={handleNewOrder}
          className="px-6 py-4 rounded-full bg-[#c73b0f] cursor-pointer font-inherit text-base font-semibold leading-[1.3] text-white border-0"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default Order;
