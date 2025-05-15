import React, { useState } from "react";
import Menu from "./components/menu/Menu";
import CartEmpty from "./components/cart/CartEmpty";
import Cart from "./components/cart/Cart";
import Order from "./components/order/Order";

import { useCart } from "./contexts/CartContext";

function App() {
  const { state } = useCart();

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <main className="relative flex flex-col gap-8">
        <section className="flex flex-col gap-8">
          <h2 className="text-[2.5rem] font-bold leading-[1.2] text-[#260f08]">
            Desserts
          </h2>

          <Menu />
        </section>

        <aside>
          {state.cart.length === 0 ? (
            <CartEmpty />
          ) : (
            <Cart onShowModal={setShowModal} />
          )}
        </aside>

        {showModal && <Order onShowModal={setShowModal} />}
      </main>
    </div>
  );
}

export default App;
