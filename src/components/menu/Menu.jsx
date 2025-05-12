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
    <ul>
      {products.map((product) => (
        <MenuItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default Menu;
