import React from "react";

function MenuItem({ product }) {
  const { name, category, price, image_mobile } = product;

  return (
    <li>
      <div>
        <picture>
          <img src={image_mobile} alt="" />
        </picture>

        <button>
          <img src="/images/icon-add-to-cart.svg" alt="" />
          Add to Cart
        </button>
      </div>

      <div>
        <h3>{category}</h3>
        <p>{name}</p>
        <span>${price}</span>
      </div>
    </li>
  );
}

export default MenuItem;
