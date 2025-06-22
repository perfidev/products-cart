import React from "react";
import OrderItem from "./OrderItem";

import { useCart } from "../../contexts/CartContext";
import { getTotalCartPrice } from "../../utils/cartUtils";
import { formatCurrency } from "../../utils/helpers";

function Order({ onShowModal }) {
  const { state, dispatch, triggerRefreshProducts } = useCart();
  const totalCartPrice = getTotalCartPrice(state.cart);

  const handleNewOrder = () => {
    localStorage.removeItem("cart");
    dispatch({ type: "cart/clear" });
    triggerRefreshProducts();
    onShowModal(false);
  };

  return (
    <div className="fixed inset-0 z-[998] flex items-center justify-center bg-black/50 md:px-10">
      <div className="absolute bottom-0 left-0 z-[999] flex flex-col gap-8 w-full max-h-[90vh] p-10 px-6 rounded-t-xl bg-white md:top-1/2 md:left-1/2 md:bottom-auto md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[43rem] md:p-10 md:rounded-xl xl:max-w-[37rem]">
        <div className="flex flex-col gap-6 shrink-0">
          <img
            src="/images/icon-order-confirmed.svg"
            alt=""
            className="w-12 h-12"
          />

          <div className="flex flex-col gap-2">
            <h4 className="text-[2.5rem] font-bold leading-[1.2] text-[#260f08]">
              Order Confirmed
            </h4>
            <p className="text-base font-normal leading-normal text-[#87635a]">
              We hope you enjoy your food!
            </p>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-6 p-6 overflow-auto rounded-[8px] bg-[#fcf8f6]">
          <ul className="flex flex-col gap-4 list-none">
            {state.cart.map((item) => (
              <OrderItem key={item.id} item={item} />
            ))}
          </ul>

          <hr className="w-full h-px border-0 bg-[#f5eeec]" />

          <div className="flex items-center justify-between">
            <p className="text-sm font-normal leading-normal text-[#260f08]">
              Order total
            </p>
            <span className="text-2xl font-bold leading-normal text-[#260f08]">
              {formatCurrency(totalCartPrice)}
            </span>
          </div>
        </div>

        <button
          onClick={handleNewOrder}
          className="px-6 py-4 rounded-full bg-[#c73b0f] shrink-0 cursor-pointer font-inherit text-base font-semibold leading-[1.3] text-white border-0  hover:bg-[#952c0b] focus-visible:bg-[#952c0b] focus-visible:outline-none"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default Order;
