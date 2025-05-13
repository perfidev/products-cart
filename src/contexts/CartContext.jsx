import { createContext, useContext, useReducer } from "react";

const initialState = {
  cart: [],
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
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      return { ...state, cart: updateIncrease };

    case "cart/decreaseQuantity":
      const updateDecrease = state.cart
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
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

  return (
    <CartContext.Provider value={{ state, dispatch }}>
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
