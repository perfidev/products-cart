import React from "react";

function Menu() {
  return (
    <ul>
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
          <h2>Waffle</h2>
          <p>Waffle with Berries</p>
          <span>$6.50</span>
        </div>
      </li>
    </ul>
  );
}

export default Menu;
