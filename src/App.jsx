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
      <main>
        <section>
          <h2>Desserts</h2>

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
