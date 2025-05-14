export const getTotalCartQuantity = (cart) =>
  Array.isArray(cart) ? cart.reduce((sum, item) => sum + item.quantity, 0) : 0;

export const getTotalCartPrice = (cart) =>
  Array.isArray(cart)
    ? cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    : 0;

export const getCurrentQuantityById = (id, cart) =>
  Array.isArray(cart) ? cart.find((item) => item.id === id)?.quantity ?? 0 : 0;
