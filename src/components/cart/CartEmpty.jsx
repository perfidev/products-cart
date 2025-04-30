import React from "react";

function CartEmpty() {
  return (
    <div>
      <h3>Your Cart (0)</h3>

      <div>
        <img src="/images/illustration-empty-cart.svg" alt="" />
        <p>Your added items will appear here</p>
      </div>
    </div>
  );
}

export default CartEmpty;
