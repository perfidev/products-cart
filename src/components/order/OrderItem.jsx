import React from "react";

function OrderItem({ item }) {
  return (
    <li>
      <div>
        <img src={item.image} alt={item.name} />

        <div>
          <p>{item.name}</p>
          <div>
            <span>{item.quantity}x</span>
            <span>@ ${item.price}</span>
          </div>
        </div>
      </div>

      <span>${item.totalPrice}</span>
    </li>
  );
}

export default OrderItem;
