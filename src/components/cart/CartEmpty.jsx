import React from "react";

function CartEmpty() {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl font-bold leading-normal text-[#c73b07]">
        Your Cart (0)
      </h3>

      <div className="flex flex-col items-center gap-4 py-4">
        <img
          src="/images/illustration-empty-cart.svg"
          alt="cart empty icon"
          className="block w-32 h-32"
        />
        <p className="text-sm font-semibold leading-normal text-[#87635a]">
          Your added items will appear here
        </p>
      </div>
    </div>
  );
}

export default CartEmpty;
