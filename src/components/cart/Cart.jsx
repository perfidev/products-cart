import React from "react";
import CartItem from "./CartItem";

import { useCart } from "../../contexts/CartContext";
import { getTotalCartQuantity, getTotalCartPrice } from "../../utils/cartUtils";

function Cart() {
  const { state } = useCart();
  const totalCartQuantity = getTotalCartQuantity(state.cart);
  const totalCartPrice = getTotalCartPrice(state.cart);

  return (
    <div>
      <h3>Your Cart ({totalCartQuantity})</h3>

      <ul>
        {state.cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>

      <hr />

      <div>
        <p>Order Total</p>
        <span>${totalCartPrice}</span>
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
