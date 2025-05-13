export const getTotalCartQuantity = (cart) =>
  cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (cart) =>
  cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id, cart) =>
  cart.find((item) => item.id === id)?.quantity ?? 0;
