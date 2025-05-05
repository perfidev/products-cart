import React from "react";
import Menu from "./components/menu/Menu";
import CartEmpty from "./components/cart/CartEmpty";
import Cart from "./components/cart/Cart";
import Order from "./components/order/Order";

function App() {
  return (
    <div>
      <main>
        <section>
          <h2>Desserts</h2>

          <Menu />
        </section>

        <aside>
          <CartEmpty />
          <Cart />
        </aside>

        <Order />
      </main>
    </div>
  );
}

export default App;
