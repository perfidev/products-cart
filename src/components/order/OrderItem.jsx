import React from "react";

function OrderItem() {
  return (
    <li>
      <div>
        <img src="/images/image-tiramisu-thumbnail.jpg" alt="" />

        <div>
          <p>Classic Tiramisu</p>
          <div>
            <span>1x</span>
            <span>@ $5.50</span>
          </div>
        </div>
      </div>

      <span>$5.50</span>
    </li>
  );
}

export default OrderItem;
