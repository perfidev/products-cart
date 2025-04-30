import React from "react";
import CartEmpty from "./components/cart/CartEmpty";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div>
      <main>
        <section></section>

        <aside>
          <CartEmpty />
          <Cart />
        </aside>
      </main>
    </div>
  );
}

export default App;
