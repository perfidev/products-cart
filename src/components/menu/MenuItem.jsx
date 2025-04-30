import React from "react";

function MenuItem() {
  return (
    <li>
      <div>
        <picture>
          <img src="/images/image-waffle-mobile.jpg" alt="" />
        </picture>

        <button>
          <img src="/images/icon-add-to-cart.svg" alt="" />
          Add to Cart
        </button>
      </div>

      <div>
        <h3>Waffle</h3>
        <p>Waffle with Berries</p>
        <span>$6.50</span>
      </div>
    </li>
  );
}

export default MenuItem;
