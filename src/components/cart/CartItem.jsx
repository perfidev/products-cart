import React from "react";

function CartItem() {
  return (
    <li>
      <div>
        <span>Classic Tiramisu</span>
        <div>
          <span>1x</span>
          <span>@ $5.50</span>
          <span>$5.50</span>
        </div>
      </div>

      <button>
        <img src="/images/icon-remove-item.svg" alt="" />
      </button>
    </li>
  );
}

export default CartItem;
