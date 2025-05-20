import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

import { getProducts } from "../../services/apiProducts";

function Menu() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProducts();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <ul className="grid grid-cols-1 gap-6 list-none sm:grid-cols-2 sm:auto-rows-auto md:grid-cols-3 md:gap-y-8 md:gap-x-6">
      {products.map((product) => (
        <MenuItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default Menu;
