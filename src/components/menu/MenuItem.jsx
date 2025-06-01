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
      quantity_db: product.quantity,
      price: product.price,
      totalPrice: 1 * product.price,
      image_mobile: product.image_mobile,
      image_tablet: product.image_tablet,
      image_desktop: product.image_desktop,
      image_thumnail: product.image_thumnail,
    };
    dispatch({
      type: "cart/add",
      payload: cartItem,
    });
  };

  return (
    <li className="flex flex-col gap-[2.375rem]">
      <div className="relative rounded-md">
        <picture>
          <source srcSet={product.image_desktop} media="(min-width: 1024px)" />
          <source srcSet={product.image_tablet} media="(min-width: 640px)" />
          {isInCart ? (
            <img
              src={product.image_mobile}
              alt={product.name}
              className="block w-full h-auto object-cover object-center rounded-md border-[2px] border-[#c73b0f]"
            />
          ) : (
            <img
              src={product.image_mobile}
              alt={product.name}
              className="block w-full h-auto object-cover object-center rounded-md"
            />
          )}
        </picture>

        {isInCart ? (
          <button
            className="absolute bottom-[-1.375rem] left-1/2 -translate-x-1/2
         flex items-center justify-between
         w-40 p-3 rounded-full border-none
         font-['Red_Hat_Text',sans-serif] text-sm font-semibold leading-normal
         text-white
         bg-[#c73b0f] 
         shadow-[inset_0_0_0_1px_#c73b0f"
            tabIndex={-1}
          >
            <span
              tabIndex={0}
              role="button"
              className="flex items-center justify-center w-5 h-5 p-[0.125rem] rounded-full border border-white cursor-pointer"
              onClick={() =>
                dispatch({ type: "cart/decreaseQuantity", payload: product.id })
              }
            >
              <img src="/images/icon-decrement-quantity.svg" alt="" />
            </span>

            <span className="text-sm font-semibold leading-normal text-white">
              {currentQuantity}
            </span>

            <span
              tabIndex={0}
              role="button"
              className="flex items-center justify-center w-5 h-5 p-[0.125rem] rounded-full border border-white cursor-pointer"
              onClick={() =>
                dispatch({ type: "cart/increaseQuantity", payload: product.id })
              }
            >
              <img src="/images/icon-increment-quantity.svg" alt="" />
            </span>
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className="absolute bottom-[-1.375rem] left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 w-40 p-3 rounded-full border-none cursor-pointer font-[600] text-sm leading-none text-[#260f08] font-['Red_Hat_Text',sans-serif] bg-white shadow-[inset_0_0_0_1px_#ad8a85] hover:text-[#c73b0f] hover:shadow-[inset_0_0_0_1px_#c73b0f] focus:outline-none focus:text-[#c73b0f] focus:shadow-[inset_0_0_0_1px_#c73b0f]"
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
