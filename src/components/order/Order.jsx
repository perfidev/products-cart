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
            {state.cart.map((item) => (
              <OrderItem key={item.id} item={item} />
            ))}
          </ul>

          <hr />

          <div>
            <p>Order total</p>
            <span>${totalCartPrice}</span>
          </div>
        </div>

        <button onClick={handleNewOrder}>Start New Order</button>
      </div>
    </div>
  );
}

export default Order;
