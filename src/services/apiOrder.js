import supabase from "../supabase";

export async function submitOrder(cart, total, quantity) {
  const { data: order, error: orderError } = await supabase
    .from("orders")
    .insert([{ quantity: quantity, total: total }])
    .select()
    .single();

  if (orderError) return orderError;

  const orderItems = cart.map((item) => ({
    order_id: order.id,
    product_id: item.id,
    quantity: item.quantity,
    unit_price: item.price,
    subtotal: item.totalPrice,
  }));

  const { error: orderItemsError } = await supabase
    .from("order_items")
    .insert(orderItems);

  if (orderItemsError) return orderItemsError;

  for (const item of cart) {
    const { error: productsError } = await supabase
      .from("products")
      .update({ quantity: item.quantity_db - item.quantity })
      .eq("id", item.id);

    if (productsError) return productsError;
  }

  return { success: true };
}
