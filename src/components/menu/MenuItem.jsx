import React from "react";
import { useCart } from "../../contexts/CartContext";
import { getCurrentQuantityById } from "../../utils/cartUtils";

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
    <li>
      <div>
        <picture>
          <img src={product.image_mobile} alt={product.name} />
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
          <button onClick={handleAddToCart}>
            <img src="/images/icon-add-to-cart.svg" alt="" />
            Add to Cart
          </button>
        )}
      </div>

      <div>
        <h3>{product.category}</h3>
        <p>{product.name}</p>
        <span>${product.price}</span>
      </div>
    </li>
  );
}

export default MenuItem;
