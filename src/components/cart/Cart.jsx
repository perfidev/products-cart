import React from "react";
import CartItem from "./CartItem";

function Cart() {
  return (
    <div>
      <h3>Your Cart (7)</h3>

      <ul>
        <CartItem />
      </ul>

      <hr />

      <div>
        <p>Order Total</p>
        <span>$46.50</span>
      </div>

      <div>
        <img src="/images/icon-carbon-neutral.svg" alt="" />
        <p>
          This is a <strong>carbon-neutral</strong> delivery
        </p>
      </div>

      <button>Confirm Order</button>
    </div>
  );
}

export default Cart;
