import React from "react";

function CartEmpty() {
  return (
    <div className="flex flex-col gap-6 p-6 rounded-[12px] bg-white">
      <h3 className="text-[1.5rem] font-bold leading-normal text-[#c73b07]">
        Your Cart (0)
      </h3>

      <div className="flex flex-col items-center gap-4 py-4">
        <img src="/images/illustration-empty-cart.svg" alt="cart empty icon" />
        <p className="text-sm font-semibold leading-[1.4] text-[#87635a]">
          Your added items will appear here
        </p>
      </div>
    </div>
  );
}

export default CartEmpty;
