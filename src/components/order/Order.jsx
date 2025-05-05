import React from "react";
import OrderItem from "./OrderItem";

function Order() {
  return (
    <div>
      <div>
        <div>
          <img src="/images/icon-order-confirmed.svg" alt="" />

          <div>
            <h4>Order Confirmed</h4>
            <p>We hope you enjoy your food!</p>
          </div>
        </div>

        <div>
          <ul>
            <OrderItem />
          </ul>

          <hr />

          <div>
            <p>Order total</p>
            <span>$46.50</span>
          </div>
        </div>

        <button>Start New Order</button>
      </div>
    </div>
  );
}

export default Order;
