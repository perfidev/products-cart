import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const localStorageCart = () => {
  try {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

const initialState = {
  cart: localStorageCart(),
};

function reducer(state, action) {
  switch (action.type) {
    case "cart/add":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case "cart/delete":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "cart/increaseQuantity":
      const updateIncrease = state.cart.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: (item.quantity + 1) * item.price,
            }
          : item
      );

      return { ...state, cart: updateIncrease };

    case "cart/decreaseQuantity":
      const updateDecrease = state.cart
        .map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity - 1,
                totalPrice: (item.quantity - 1) * item.price,
              }
            : item
        )
        .filter((item) => item.quantity > 0);

      return { ...state, cart: updateDecrease };

    case "cart/clear":
      return initialState;

    default:
      throw new Error("unknown action type");
  }
}

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [shouldRefreshProducts, setShouldRefreshProducts] = useState(false);

  function triggerRefreshProducts() {
    setShouldRefreshProducts((prev) => !prev);
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ state, dispatch, shouldRefreshProducts, triggerRefreshProducts }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext was used outside the CartProvider");
  return context;
};
