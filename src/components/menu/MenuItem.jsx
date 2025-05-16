import React from "react";
import { useCart } from "../../contexts/CartContext";
import { getCurrentQuantityById } from "../../utils/cartUtils";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ product }) {
  const { state, dispatch } = useCart();

  const currentQuantity = getCurrentQuantityById(product.id, state.cart);
  const isInCart = currentQuantity > 0;

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      quantity: 1,
      price: product.price,
      totalPrice: 1 * product.price,
      image: product.image_mobile,
    };
    dispatch({
      type: "cart/add",
      payload: cartItem,
    });
  };

  return (
    <li className="flex flex-col gap-4">
      <div className="relative h-[14.625rem] overflow-hidden">
        <picture>
          <img
            src={product.image_mobile}
            alt={product.name}
            className="relative block w-full rounded-[8px]"
          />
        </picture>

        {isInCart ? (
          <button>
            <span
              onClick={() =>
                dispatch({ type: "cart/decreaseQuantity", payload: product.id })
              }
            >
              -
            </span>

            <span>{currentQuantity}</span>

            <span
              onClick={() =>
                dispatch({ type: "cart/increaseQuantity", payload: product.id })
              }
            >
              +
            </span>
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center gap-2 absolute bottom-0 left-1/2 -translate-x-1/2 w-40 p-3 border border-[#ad8a85] rounded-full bg-white cursor-pointer font-inherit text-sm font-semibold leading-normal text-[#260f08]"
          >
            <img
              src="/images/icon-add-to-cart.svg"
              alt="cart icon"
              className="w-5 h-5"
            />
            Add to Cart
          </button>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-normal leading-normal text-[#87635a]">
          {product.category}
        </h3>
        <p className="text-base font-semibold leading-normal text-[#260f08]">
          {product.name}
        </p>
        <span className="text-base font-semibold leading-normal text-[#c73b0f]">
          {formatCurrency(product.price)}
        </span>
      </div>
    </li>
  );
}

export default MenuItem;
