import api from "./axios";

export async function createOrder(quantity, total) {
  const res = await api.post("/orders", [
    {
      quantity,
      total,
    },
  ]);
  const order = res.data[0];

  return order;
}

export async function createOrderItems(order, cart) {
  const items = cart.map((item) => ({
    order_id: order.id,
    product_id: item.id,
    quantity: item.quantity,
    unit_price: item.price,
    subtotal: item.totalPrice,
  }));

  await api.post("/order_items", items);
}

export async function updateItemsQuantity(cart) {
  // for (const item of cart) {
  //   const res = await api.patch(`/products?id=eq.${item.id}`, {
  //     quantity: item.quantity_db - item.quantity,
  //   });
  // }

  // faster way
  await Promise.all(
    cart.map((item) =>
      api.patch(`/products?id=eq.${item.id}`, {
        quantity: item.quantity_db - item.quantity,
      })
    )
  );
}
