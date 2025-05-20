import React from "react";
import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item }) {
  return (
    <li className="flex items-center gap-2 pb-4 border-b border-[#f5eeec] last:pb-0 last:border-b-0">
      <div className="flex flex-1 gap-4">
        <img
          src={item.image_thumnail}
          alt={item.name}
          className="w-12 h-12 rounded-[4px]"
        />

        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold leading-normal text-[#260f08]">
            {item.name}
          </p>
          <div className="flex flex-row items-center gap-2">
            <span className="text-sm font-semibold leading-normal text-[#c73b0f]">
              {item.quantity}x
            </span>
            <span className="text-base font-semibold leading-normal text-[#87635a]">
              @ {formatCurrency(item.price)}
            </span>
          </div>
        </div>
      </div>

      <span className="text-base font-semibold leading-normal text-[#260f08]">
        {formatCurrency(item.totalPrice)}
      </span>
    </li>
  );
}

export default OrderItem;
